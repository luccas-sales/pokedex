import 'dotenv/config';

import { BsFillBackpack2Fill } from 'react-icons/bs';
import { FaBolt, FaHeart, FaPlus } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import StatsCard from '@/components/StatsCard';
import PokemonCard from '@/components/PokemonCard';
import Header from '@/components/Header';
import AddPokemonModal from '@/components/AddPokemonModal';
import Link from 'next/link';
import EditPokemonModal from '@/components/EditPokemonModal';
import DeleteModal from '@/components/DeleteModal';
import SmoothWrapper from '@/components/SmoothWrapper';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import StatsCardSkeleton from '@/components/StatsCardSkeleton';
import PokemonCardSkeleton from '@/components/PokemonCardSkeleton';
import { redirect } from 'next/navigation';

interface Pokemon {
  id: number;
  pokedex_id: number;
  type: string;
  name: string;
  level: number;
  hp: number;
  userId: number;
}

export default async function dashboard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  if (params.search === '') {
    redirect('/dashboard');
  }

  const isAddModalOpen = params.modal === 'add';
  const isEditModalOpen = params.modal === 'edit';
  const isDeleteModalOpen = params.modal === 'del';

  const pokemonId = params.id ? String(params.id) : null;

  const cookieStore = await cookies();
  const loggedInUserId = cookieStore.get('userId')?.value;

  let userPokemonData = [];

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const API = process.env.NEXT_PUBLIC_API_URL;

    const response = await axios.get(`${API}/pokedex/pokemons`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    userPokemonData = response.data;
  } catch (error) {
    const err = error as AxiosError;

    if (err.response) {
      const errorMessage = (err.response.data as { message: string }).message;
      console.error(errorMessage);
    } else if (err.request) {
      console.error('O servidor não respondeu. Verifique sua conexão.');
    } else {
      console.error(`Erro de configuração: ${err.message}`);
    }

    userPokemonData = [];
  }

  const searchQuery = ((params.search as string) || '').toLowerCase();

  const filteredPokemon = userPokemonData.filter((pokemon: Pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchQuery) ||
      pokemon.type.toLowerCase().includes(searchQuery) ||
      pokemon.pokedex_id.toString().includes(searchQuery)
    );
  });

  const totalLevel = userPokemonData.reduce((acc: number, pokemon: Pokemon) => {
    return acc + pokemon.level;
  }, 0);

  const averageLevel =
    userPokemonData.length > 0
      ? Math.floor(totalLevel / userPokemonData.length)
      : 0;

  const totalHp = userPokemonData.reduce((acc: number, pokemon: Pokemon) => {
    return acc + pokemon.hp;
  }, 0);

  const averageHp =
    userPokemonData.length > 0
      ? Math.floor(totalHp / userPokemonData.length)
      : 0;

  const myPokemonsQuanty = userPokemonData.reduce(
    (acc: number, pokemon: Pokemon) => {
      if (pokemon.userId === Number(loggedInUserId)) {
        return acc + 1;
      }
      return acc;
    },
    0,
  );

  return (
    <>
      {isAddModalOpen && <AddPokemonModal />}

      {isEditModalOpen && pokemonId && (
        <EditPokemonModal userPokemonData={userPokemonData} id={pokemonId} />
      )}

      {isDeleteModalOpen && pokemonId && (
        <DeleteModal userPokemonData={userPokemonData} id={pokemonId} />
      )}

      <Header />

      <SmoothWrapper>
        <main className='container mx-auto px-4 py-8'>
          <div className='mt-20 mb-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            {userPokemonData.length === 0 ? (
              <>
                <StatsCardSkeleton />
                <StatsCardSkeleton />
                <StatsCardSkeleton />
                <StatsCardSkeleton />
              </>
            ) : (
              <>
                <StatsCard
                  title='Total de Pokémon'
                  icon={BsFillBackpack2Fill}
                  quanty={userPokemonData.length}
                  description='Registrados na Pokédex'
                />

                <StatsCard
                  title='Meus Pokémon'
                  icon={FaPlus}
                  quanty={myPokemonsQuanty}
                  description='Adicionados por você'
                />

                <StatsCard
                  title='Nível Médio'
                  icon={FaBolt}
                  quanty={averageLevel}
                  description='Entre todos os Pokémon'
                />

                <StatsCard
                  title='HP Médio'
                  icon={FaHeart}
                  quanty={averageHp}
                  description='Pontos de vida'
                />
              </>
            )}
          </div>

          <div className='bg-sweet-pink-50/75 flex flex-col gap-6 rounded-xl border border-sweet-pink-100 p-6 shadow-sm'>
            <div>
              <div className='flex flex-row items-center justify-between gap-4 max-sm:flex-col max-sm:items-stretch max-sm:justify-start'>
                <div>
                  <div className='font-semibold'>Lista de Pokémon</div>
                  <div className='text-sm text-asters-950/50'>
                    Gerencie todos os Pokémon registrados na sua Pokédex
                  </div>
                </div>

                <Link
                  className='flex items-center gap-2 bg-asters-700 text-sm
                text-asters-50 font-bold py-2 px-4 rounded-md border-2 border-asters-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-asters-950 lg:hover:shadow-md'
                  href='?modal=add'
                >
                  <FaPlus />
                  Adicionar Pokémon
                </Link>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <form
                method='GET'
                className='flex rounded-md border border-sweet-pink-950'
              >
                <FiSearch className='ml-3 text-asters-950/50' />
                <input
                  name='search'
                  defaultValue={(params.search as string) || ''}
                  placeholder='Buscar por nome, tipo ou número de id'
                  className='w-full px-3 py-2 outline-none rounded-md'
                />
                <button type='submit' className='hidden'>
                  Buscar
                </button>
              </form>

              <div className='grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {userPokemonData.length === 0 ? (
                  <>
                    <PokemonCardSkeleton />
                    <PokemonCardSkeleton />
                  </>
                ) : filteredPokemon.length === 0 ? (
                  <div className='col-span-full flex flex-col items-center justify-center text-center py-12 px-4 border-2 border-dashed border-asters-950/50 rounded-xl bg-asters-50/50'>
                    <p className='text-lg font-semibold text-asters-950'>
                      Nenhum Pokémon encontrado
                    </p>
                    <p className='text-sm text-asters-950/50'>
                      Não encontramos resultados para "{searchQuery}". Tente
                      outro termo ou verifique a ortografia.
                    </p>
                  </div>
                ) : (
                  filteredPokemon.map((pokemon: Pokemon) => {
                    const isOwner = pokemon.userId === Number(loggedInUserId);
                    return (
                      <PokemonCard
                        key={`key__${pokemon.pokedex_id}`}
                        {...pokemon}
                        isOwner={isOwner}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </main>
      </SmoothWrapper>
    </>
  );
}
