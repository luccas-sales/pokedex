'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdCatchingPokemon } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';

export default function Header() {
  const [isLogouting, setIsLogouting] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLogouting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Você foi desconectado com Sucesso!');

    router.push('/');
  };

  return (
    <header className='fixed flex justify-between items-center bg-sweet-pink-100/75 border-b border-sweet-pink-100 px-4 py-2 w-full backdrop-blur-xs backdrop-grayscale z-50'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <div className='flex justify-center items-center gap-3.5'>
          <Image
            className='scale-200'
            src='/gengar.gif'
            alt='Logo'
            width={32}
            height={32}
          />
          <div>
            <h1 className='text-lg font-extrabold max-sm:text-sm'>Pokédex</h1>
            <p className='text-xs text-asters-950/50 max-sm:text-xs'>
              Gerenciamento de Pokémons
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4 max-sm:flex-col max-sm:gap-1'>
          <p className='text-sm text-asters-700 font-bold uppercase max-sm:text-xs'>
            usuario
          </p>
          <button
            className={`flex items-center gap-2 bg-sweet-pink-50 text-sm
                 font-bold py-2 px-4 rounded-md border-2 border-sweet-pink-100 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-sweet-pink-700 
                 lg:hover:text-sweet-pink-50 lg:hover:shadow-md max-sm:py-1 max-sm:px-3 max-sm:text-xs ${isLogouting ? 'animate-pulse' : ''} `}
            disabled={isLogouting}
            onClick={() => handleLogout()}
          >
            <RxExit className='max-sm:size-3' />
            {isLogouting ? 'Saindo...' : 'Sair'}
          </button>
        </div>
      </div>
    </header>
  );
}
