import { HiX } from 'react-icons/hi';
import AddPokemonForm from '@/components/AddPokemonForm';

import Link from 'next/link';

export default function AddPokemonModal() {
  return (
    <div className='fixed flex justify-center items-center bg-asters-950/50 backdrop-blur-xs backdrop-grayscale p-4 z-50 h-full w-full gap-4'>
      <div className='relative flex flex-col gap-4 bg-white rounded-lg border border-asters-100 p-6 shadow-lg'>
        <Link href='/dashboard' className='absolute right-4 top-4'>
          <HiX className='size-5 fill-asters-950 text-sm cursor-pointer transition-all duration-300 ease-out active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5' />
        </Link>

        <div className='flex flex-col gap-2 text-left max-sm:text-center'>
          <h2 className='text-lg font-semibold'>Adicionar Pokémon</h2>
          <p className='text-asters-950/50 text-sm'>
            Selecione um Pokémon da Pokédex global e defina seu nível e HP.
          </p>
        </div>

        <AddPokemonForm />
      </div>
    </div>
  );
}
