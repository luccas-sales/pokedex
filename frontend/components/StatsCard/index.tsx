import { IconType } from 'react-icons';

interface StatsCard {
  title: string;
  icon: IconType;
  quanty: number;
  description: string;
}

export default function index({
  title,
  icon: Icon,
  quanty,
  description,
}: StatsCard) {
  return (
    <div className='bg-sweet-pink-50/75 flex flex-col gap-6 rounded-xl border border-sweet-pink-100 p-6 shadow-sm'>
      <div className='flex items-center justify-between py-2'>
        <div className='text-sm'>{title}</div>
        <Icon className='size-4 text-asters-950/50' />
      </div>

      <div>
        <div className='text-3xl font-bold'>{quanty}</div>
        <p className='text-xs text-asters-950/50'>{description}</p>
      </div>
    </div>
  );
}
