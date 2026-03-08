import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import Link from 'next/link';

export default function login() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col gap-5 w-full max-w-md px-4'>
        <div className='flex flex-col justify-center items-center gap-10'>
          <Image
            className='scale-200'
            src='/haunter.gif'
            alt='Logo'
            width={100}
            height={100}
            loading='eager'
          />

          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='text-2xl font-extrabold'>Pokédex</h1>
            <p className='text-md text-asters-950/50'>
              Gerenciamento de Pokémons
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-4 bg-white p-6 rounded-xl border border-asters-100 shadow-xs'>
          <div className='flex flex-col justify-center items-start gap-1'>
            <h2 className='font-semibold'>Entrar</h2>
            <p className='text-sm text-black/50'>
              Acesse sua conta para gerenciar a Pokédex
            </p>
          </div>

          <LoginForm />

          <p className='flex justify-center items-center gap-1 w-full text-sm text-asters-950/50'>
            Não tem uma conta?
            <Link className='text-asters-950' href='/register'>
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
