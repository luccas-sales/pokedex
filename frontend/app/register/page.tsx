import RegisterForm from '@/components/RegisterForm';
import Image from 'next/image';
import Link from 'next/link';

export default function register() {
  return (
    <main className='flex flex-col justify-center items-center h-screen overflow-x-hidden overflow-y-auto max-sm:pt-15 max-sm:pb-10'>
      <div className='flex flex-col gap-4 w-full max-w-md px-4'>
        <div className='flex flex-col justify-center items-center gap-10'>
          <Image
            className='scale-175'
            src='/gastly.gif'
            alt='Logo'
            width={100}
            height={100}
          />

          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='text-2xl font-extrabold'>Pokédex</h1>
            <p className='text-md text-asters-950/50'>
              Gerenciamento de Pokémons
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-xs'>
          <div className='flex flex-col justify-center items-start gap-1'>
            <h2 className='font-semibold'>Criar Conta</h2>
            <p className='text-sm text-black/50'>
              Registre-se para acessar a Pokédex
            </p>
          </div>

          <RegisterForm />

          <p className='flex justify-center items-center gap-1 w-full text-sm text-asters-950/50'>
            Já tem uma conta?
            <Link className='text-asters-950' href='/login'>
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
