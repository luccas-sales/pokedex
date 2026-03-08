import Link from 'next/link';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface PokemonCard {
  id: number;
  pokedexId: number;
  type: string;
  image: string;
  name: string;
  level: number;
  hp: number;
}

interface PokemonTypeStyle {
  border: string;
  bar: string;
  badge: string;
}

const pokemonTypes: Record<string, PokemonTypeStyle> = {
  fogo: {
    border: 'border-red-500',
    bar: 'bg-red-500',
    badge: 'bg-red-500',
  },
  agua: {
    border: 'border-blue-500',
    bar: 'bg-blue-500',
    badge: 'bg-blue-500',
  },
  planta: {
    border: 'border-green-500',
    bar: 'bg-green-500',
    badge: 'bg-green-500',
  },
  gelo: {
    border: 'border-cyan-500',
    bar: 'bg-cyan-500',
    badge: 'bg-cyan-500',
  },
  lutador: {
    border: 'border-amber-700',
    bar: 'bg-amber-700',
    badge: 'bg-amber-700',
  },
  veneno: {
    border: 'border-purple-500',
    bar: 'bg-purple-500',
    badge: 'bg-purple-500',
  },
  terra: {
    border: 'border-orange-500',
    bar: 'bg-orange-500',
    badge: 'bg-orange-500',
  },
  voador: {
    border: 'border-sky-500',
    bar: 'bg-sky-500',
    badge: 'bg-sky-500',
  },
  inseto: {
    border: 'border-lime-500',
    bar: 'bg-lime-500',
    badge: 'bg-lime-500',
  },
  pedra: {
    border: 'border-gray-500',
    bar: 'bg-gray-500',
    badge: 'bg-gray-500',
  },
  fantasma: {
    border: 'border-indigo-500',
    bar: 'bg-indigo-500',
    badge: 'bg-indigo-500',
  },
  sombrio: {
    border: 'border-neutral-800',
    bar: 'bg-neutral-800',
    badge: 'bg-neutral-800',
  },
  fada: {
    border: 'border-pink-500',
    bar: 'bg-pink-500',
    badge: 'bg-pink-500',
  },
  normal: {
    border: 'border-stone-400',
    bar: 'bg-stone-400',
    badge: 'bg-stone-400',
  },
};

export default function PokemonCard({
  id,
  pokedexId,
  type,
  image,
  name,
  level,
  hp,
}: PokemonCard) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-green-50/50 border ${pokemonTypes[type.toLowerCase()].border} shadow-sm transition-all hover:shadow-lg`}
    >
      <div className={`h-2 w-full ${pokemonTypes[type.toLowerCase()].bar}`} />

      <div className='p-4'>
        <div className='mb-2 flex justify-between'>
          <span className='font-mono text-sm text-black/50'>#{pokedexId}</span>

          <span
            className={`rounded ${pokemonTypes[type.toLowerCase()].badge} px-2 py-0.5 text-xs text-white`}
          >
            {type}
          </span>
        </div>

        <div className='relative mx-auto mb-3 flex h-32 w-32 items-center justify-center'>
          <div className='absolute inset-0 rounded-full bg-black/10' />

          <img
            src={image}
            alt='Bulbasaur'
            className='relative z-10 drop-shadow-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-5'
          />
        </div>

        <h3 className='mb-3 text-center text-lg font-bold'>{name}</h3>

        <div className='mb-4 grid grid-cols-2 gap-2'>
          <div className='rounded-md bg-black/10 p-2 text-center'>
            <span className='block text-xs text-black/50'>Nivel</span>
            <span className='font-bold'>{level}</span>
          </div>

          <div className='rounded-md bg-black/10 p-2 text-center'>
            <span className='block text-xs text-black/50'>HP</span>
            <span className='font-bold'>{hp}</span>
          </div>
        </div>

        <div className='flex gap-2'>
          <Link
            className='flex justify-center items-center gap-2 bg-orange-700 text-sm
                text-orange-50 font-bold py-2 px-4 rounded-md border-2 border-orange-700/50 text-nowrap cursor-pointer w-full transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-orange-950 lg:hover:shadow-md'
            href={`?modal=edit&id=${id}`}
          >
            <FiEdit2 />
            Editar
          </Link>

          <Link
            className='flex justify-center items-center gap-2 bg-red-700 text-sm
                text-red-50 font-bold py-2 px-4 rounded-md border-2 border-red-700/50 text-nowrap cursor-pointer w-full transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-red-950 lg:hover:shadow-md'
            href={`?modal=del&id=${id}`}
          >
            <FiTrash2 />
            Excluir
          </Link>
        </div>
      </div>
    </div>
  );
}
