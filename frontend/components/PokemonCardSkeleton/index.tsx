import React from 'react';

export default function index() {
  return (
    <div className='group relative overflow-hidden rounded-xl bg-green-50/50 border border-asters-50 shadow-sm transition-all hover:shadow-lg'>
      <div className='h-2 w-full' />

      <div className='flex flex-col justify-center items-center p-4'>
        <div className='mb-2 flex justify-between w-full'>
          <div className='h-6 w-8 bg-asters-950 animate-pulse rounded-md'></div>

          <div className='h-6 w-20 bg-asters-950 animate-pulse rounded-md'></div>
        </div>

        <div className='relative mx-auto mb-2 flex h-32 w-32 items-center justify-center'>
          <div className='absolute inset-0 rounded-full bg-asters-950/50 animate-pulse' />
        </div>

        <div className='h-6 w-24 bg-asters-950 animate-pulse rounded-md mb-4'></div>

        <div className='mb-2 grid grid-cols-2 gap-2 w-full'>
          <div className='h-14 w-full bg-asters-950/50 animate-pulse rounded-md'></div>

          <div className='h-14 w-full bg-asters-950/50 animate-pulse rounded-md'></div>
        </div>
      </div>
    </div>
  );
}
