export default function StatsCardSkeleton() {
  return (
    <div className='bg-sweet-pink-50/75 flex flex-col gap-6 rounded-xl border border-sweet-pink-100 p-6 shadow-sm'>
      <div className='flex items-center justify-between py-2'>
        <div className='h-4 w-20 bg-asters-950 animate-pulse rounded-md'></div>
        <div className='h-8 w-8 bg-asters-950/50 animate-pulse rounded-md'></div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='h-8 w-6 bg-asters-950 animate-pulse rounded-md'></div>
        <p className='h-4 w-32 bg-asters-950/50 animate-pulse rounded-md'></p>
      </div>
    </div>
  );
}
