'use client';

import { HiX } from 'react-icons/hi';

import Link from 'next/link';
import EditPokemonForm from '../EditPokemonForm';
import { useRouter } from 'next/navigation';

interface Pokemon {
  id: number;
  pokedex_id: number;
  name: string;
  type: string;
  level: number;
  hp: number;
  image_url: string;
}

interface EditPokemonModalProps {
  id: string;
  userPokemonData: Pokemon[];
}

interface PokemonTypeStyle {
  border: string;
  bar: string;
  badge: string;
}

const pokemonTypes: Record<string, PokemonTypeStyle> = {
  fogo: {
    border: 'border-red-500',
    bar: 'bg-red-500/10',
    badge: 'bg-red-500',
  },
  agua: {
    border: 'border-blue-500',
    bar: 'bg-blue-500/10',
    badge: 'bg-blue-500',
  },
  planta: {
    border: 'border-green-500',
    bar: 'bg-green-500/10',
    badge: 'bg-green-500',
  },
  gelo: {
    border: 'border-cyan-500',
    bar: 'bg-cyan-500/10',
    badge: 'bg-cyan-500',
  },
  lutador: {
    border: 'border-amber-700',
    bar: 'bg-amber-700/10',
    badge: 'bg-amber-700',
  },
  veneno: {
    border: 'border-purple-500',
    bar: 'bg-purple-500/10',
    badge: 'bg-purple-500',
  },
  terra: {
    border: 'border-orange-500',
    bar: 'bg-orange-500/10',
    badge: 'bg-orange-500',
  },
  voador: {
    border: 'border-sky-500',
    bar: 'bg-sky-500/10',
    badge: 'bg-sky-500',
  },
  inseto: {
    border: 'border-lime-500',
    bar: 'bg-lime-500/10',
    badge: 'bg-lime-500',
  },
  pedra: {
    border: 'border-gray-500',
    bar: 'bg-gray-500/10',
    badge: 'bg-gray-500',
  },
  fantasma: {
    border: 'border-indigo-500',
    bar: 'bg-indigo-500/10',
    badge: 'bg-indigo-500',
  },
  sombrio: {
    border: 'border-neutral-800',
    bar: 'bg-neutral-800/10',
    badge: 'bg-neutral-800',
  },
  fada: {
    border: 'border-pink-500',
    bar: 'bg-pink-500/10',
    badge: 'bg-pink-500',
  },
  normal: {
    border: 'border-stone-400',
    bar: 'bg-stone-400/10',
    badge: 'bg-stone-400',
  },
};

export default function EditPokemonModal({
  id,
  userPokemonData,
}: EditPokemonModalProps) {
  const router = useRouter();

  const pokemon = userPokemonData.find((pokemon) => pokemon.id === Number(id));

  if (!pokemon) {
    router.push('/dashboard');
    return;
  }

  return (
    <div className='fixed flex justify-center items-center bg-asters-950/50 backdrop-blur-xs backdrop-grayscale p-4 z-50 h-full w-full gap-4'>
      <div className='relative flex flex-col gap-4 bg-white rounded-lg border border-asters-100 p-6 shadow-lg'>
        <Link href='/dashboard' className='absolute right-4 top-4'>
          <HiX className='size-5 fill-asters-950 text-sm cursor-pointer transition-all duration-300 ease-out active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5' />
        </Link>

        <div className='flex flex-col gap-2 text-left max-sm:text-center'>
          <h2 className='text-lg font-semibold'>
            Altere o nível e HP do Pokémon selecionado.
          </h2>
          <p className='text-asters-950/50 text-sm'>
            Selecione um Pokémon da Pokédex global e defina seu nível e HP.
          </p>
        </div>

        <div
          className={`rounded-lg border ${pokemonTypes[pokemon.type.toLowerCase()].border} ${pokemonTypes[pokemon.type.toLowerCase()].bar} p-4`}
        >
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-black/50'>Pokémon selecionado</p>
              <p className='font-semibold'>{pokemon.name}</p>
            </div>
            <div className='text-right'>
              <p className='text-sm text-black/50'>Tipo</p>
              <span
                className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden border-transparent ${pokemonTypes[pokemon.type.toLowerCase()].badge} text-white border-0`}
              >
                {pokemon.type}
              </span>
            </div>
          </div>
        </div>

        <EditPokemonForm {...pokemon} />
      </div>
    </div>
  );
}
