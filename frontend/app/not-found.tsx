import Link from 'next/link';

export default function notfound() {
  return (
    <main className='flex flex-col justify-center items-center gap-5 w-full h-screen'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className='text-sm font-bold'>OPS! PÁGINA NÃO ENCONTRADA</h2>
        <h1 className='text-9xl font-extrabold'>404</h1>
        <p className='text-xs'>Pedimos desculpas, mas a página</p>
        <p className='text-xs'>que você solicitou não foi encontrada.</p>
      </div>

      <Link
        className='bg-asters-700 text-sm
                text-asters-50 font-bold py-2 px-4 rounded-md border-2 border-asters-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-asters-950 lg:hover:shadow-md'
        href='/'
      >
        Voltar ao inicio
      </Link>
    </main>
  );
}
