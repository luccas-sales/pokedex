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

export default async function dashboard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const isAddModalOpen = params.modal === 'add';
  const isEditModalOpen = params.modal === 'edit';
  const isDeleteModalOpen = params.modal === 'del';

  const pokemonId = params.id ? String(params.id) : null;

  const userPokemonData = [
    {
      id: 1,
      pokedexId: 15,
      name: 'Charmander',
      type: 'fogo',
      level: 10,
      hp: 39,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    },
    {
      id: 2,
      pokedexId: 2,
      name: 'Squirtle',
      type: 'agua',
      level: 10,
      hp: 44,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    {
      id: 3,
      pokedexId: 3,
      name: 'Bulbasaur',
      type: 'planta',
      level: 10,
      hp: 45,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      id: 4,
      pokedexId: 4,
      name: 'Jynx',
      type: 'gelo',
      level: 12,
      hp: 65,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png',
    },
    {
      id: 5,
      pokedexId: 5,
      name: 'Machop',
      type: 'lutador',
      level: 9,
      hp: 70,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
    },
    {
      id: 6,
      pokedexId: 6,
      name: 'Ekans',
      type: 'veneno',
      level: 8,
      hp: 35,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
    },
    {
      id: 7,
      pokedexId: 7,
      name: 'Sandshrew',
      type: 'terra',
      level: 11,
      hp: 50,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png',
    },
    {
      id: 8,
      pokedexId: 8,
      name: 'Pidgey',
      type: 'voador',
      level: 6,
      hp: 40,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
    },
    {
      id: 9,
      pokedexId: 9,
      name: 'Caterpie',
      type: 'inseto',
      level: 5,
      hp: 45,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
    },
    {
      id: 10,
      pokedexId: 10,
      name: 'Geodude',
      type: 'pedra',
      level: 12,
      hp: 40,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
    },
    {
      id: 11,
      pokedexId: 11,
      name: 'Gastly',
      type: 'fantasma',
      level: 13,
      hp: 30,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png',
    },
    {
      id: 12,
      pokedexId: 12,
      name: 'Umbreon',
      type: 'sombrio',
      level: 20,
      hp: 95,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
    },
    {
      id: 13,
      pokedexId: 13,
      name: 'Clefairy',
      type: 'fada',
      level: 10,
      hp: 70,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
    },
    {
      id: 14,
      pokedexId: 14,
      name: 'Eevee',
      type: 'normal',
      level: 8,
      hp: 55,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    },
  ];

  const searchQuery = ((params.search as string) || '').toLowerCase();

  const filteredPokemon = userPokemonData.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchQuery) ||
      pokemon.type.toLowerCase().includes(searchQuery) ||
      pokemon.pokedexId.toString().includes(searchQuery)
    );
  });

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
            <StatsCard
              title='Total de Pokémon'
              icon={BsFillBackpack2Fill}
              quanty={100}
              description='Registrados na Pokédex'
            />

            <StatsCard
              title='Meus Pokémon'
              icon={FaPlus}
              quanty={10}
              description='Adicionados por você'
            />

            <StatsCard
              title='Nível Médio'
              icon={FaBolt}
              quanty={17}
              description='Entre todos os Pokémon'
            />

            <StatsCard
              title='HP Médio'
              icon={FaHeart}
              quanty={10}
              description='Pontos de vida'
            />
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
                {filteredPokemon.map((pokemon) => (
                  <PokemonCard key={pokemon.pokedexId} {...pokemon} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </SmoothWrapper>
    </>
  );
}
