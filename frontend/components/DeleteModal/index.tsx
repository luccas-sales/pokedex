'use client';

import { HiX } from 'react-icons/hi';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Pokemon {
  id: number;
  pokedexId: number;
  name: string;
  type: string;
  level: number;
  hp: number;
}

interface EditPokemonModalProps {
  id: string;
  userPokemonData: Pokemon[];
}

export default function AddPokemonModal({
  id,
  userPokemonData,
}: EditPokemonModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const pokemon = userPokemonData.find((pokemon) => pokemon.id === Number(id));

  if (!pokemon) {
    router.push('/dashboard');
    return;
  }

  const handleDelete = async (id: number) => {
    setIsDeleting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Pokémon foi deletado com Sucesso!');

    router.push('/dashboard');
  };

  return (
    <div className='fixed flex justify-center items-center bg-asters-950/50 backdrop-blur-xs backdrop-grayscale p-4 z-50 h-full w-full gap-4'>
      <div className='relative flex flex-col gap-4 bg-white rounded-lg border border-asters-100 p-6 shadow-lg'>
        <Link href='/dashboard' className='absolute right-4 top-4'>
          <HiX className='size-5 fill-asters-950 text-sm cursor-pointer transition-all duration-300 ease-out active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5' />
        </Link>

        <div className='flex flex-col gap-2 text-left max-sm:text-center'>
          <h2 className='text-lg font-semibold'>Excluir Pokémon</h2>
          <p className='text-asters-950/50 text-sm'>
            Tem certeza que deseja excluir{' '}
            <span className='font-bold'>{pokemon.name}</span> da Pokédex? Esta
            ação não pode ser desfeita.
          </p>
        </div>

        <div className='flex flex-row justify-end gap-2 max-sm:flex-col-reverse'>
          <Link
            className='bg-red-700 text-center text-sm
                text-red-50 font-bold py-2 px-4 rounded-md border-2 border-red-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-red-950 lg:hover:shadow-md'
            href='/dashboard'
          >
            Cancelar
          </Link>

          <button
            className={`bg-gray-700 text-sm
                text-gray-50 font-bold py-2 px-4 rounded-md border-2 border-gray-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-gray-950 lg:hover:shadow-md ${isDeleting ? 'animate-pulse' : ''} `}
            type='button'
            disabled={isDeleting}
            onClick={() => handleDelete(Number(id))}
          >
            {isDeleting ? 'Deletando...' : 'Deletar'}
          </button>
        </div>
      </div>
    </div>
  );
}
