import Image from 'next/image';
import SmoothWrapper from '@/components/SmoothWrapper';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default function Home() {
  return (
    <SmoothWrapper>
      <main>
        <section className='relative h-screen z-1 before:content-["*"] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-linear-to-b before:from-75% before:to-100% before:to-asters-950 before:z-2'>
          <Image
            className='absolute top-0 left-0 h-full w-full object-cover brightness-50 -z-1'
            src='/parallax-back.png'
            alt='Logo'
            width={1920}
            height={1300}
            data-speed='0.2'
          />
          <Image
            className='absolute top-0 left-0 h-full w-full object-cover brightness-50 -z-1'
            src='/parallax-mid.png'
            alt='Logo'
            width={1920}
            height={1300}
            data-speed='0.4'
          />
          <Image
            className='absolute top-0 left-0 h-full w-full object-cover brightness-50 -z-1'
            src='/parallax-front.png'
            alt='Logo'
            width={1920}
            height={1300}
            data-speed='0.8'
          />

          <div className='relative flex flex-col justify-center items-center h-full w-full gap-4 z-50'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <h2 className='text-7xl text-asters-500 font-extrabold text-shadow-md'>
                Pokédex
              </h2>

              <div className='flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-asters-100'>
                  Sistema de gerenciamento de Pokémons
                </p>
                <p className='text-base font-semibold text-asters-100'>
                  completo para os{' '}
                  <span className='text-asters-500 text-shadow-lg'>
                    MELHORES TREINADORES!
                  </span>
                </p>
              </div>
            </div>
            <Link
              className='flex items-center gap-2 bg-asters-700 text-sm
                text-asters-50 font-bold py-2 px-4 rounded-md border-2 border-asters-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-asters-950 lg:hover:shadow-md'
              href='/login'
            >
              Acessar Demonstração
              <IoMdArrowForward className='size-5' />
            </Link>
          </div>
        </section>

        <section className='relative flex flex-col justify-center items-center gap-10 -mt-px bg-asters-950 z-2'>
          <div className='flex flex-col justify-center items-center gap-4 m-25'>
            <div className='flex justify-center items-center gap-2'>
              <p className='text-asters-100 border rounded-3xl px-4 py-1 text-lg font-bold text-shadow-md max-sm:text-sm'>
                Next.js
              </p>
              <p className='text-asters-100 border rounded-3xl px-4 py-1 text-lg font-bold text-shadow-md max-sm:text-sm'>
                React
              </p>
              <p className='text-asters-100 border rounded-3xl px-4 py-1 text-lg font-bold text-shadow-md max-sm:text-sm'>
                TypeScript
              </p>
              <p className='text-asters-100 border rounded-3xl px-4 py-1 text-lg font-bold text-shadow-md max-sm:text-sm'>
                Nest.js
              </p>
            </div>

            <div className='flex justify-center items-center gap-4'>
              <p className='text-asters-100 border rounded-3xl px-4 py-1 text-sm font-bold text-shadow-md max-sm:text-xs'>
                GSAP
              </p>
              <p className='text-asters-100 border rounded-3xl px-4 py-1 text-sm font-bold text-shadow-md max-sm:text-xs'>
                Tailwind
              </p>
              <p className='text-asters-100 border rounded-3xl px-4 py-1 text-sm font-bold text-shadow-md max-sm:text-xs'>
                Prisma
              </p>
            </div>

            <p className='text-asters-300 font-semibold'>
              Desenvolvido por Luccas D' Sales
            </p>
          </div>
        </section>
      </main>
    </SmoothWrapper>
  );
}
