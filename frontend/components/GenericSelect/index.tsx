import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Option {
  value: string | number;
  text: string;
}

interface GenericSelectProps {
  id: string;
  label: string;
  placeHolder: string;
  options: Option[];
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export function GenericSelect({
  id,
  label,
  placeHolder,
  options,
  register,
  error,
}: GenericSelectProps) {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <label className='text-sm font-medium' htmlFor={id}>
        {label}
      </label>

      <select
        id={id}
        className='border border-slate-200 w-full px-3 py-2 rounded-lg outline-none bg-white cursor-pointer h-9.5 text-sm'
        {...register}
      >
        <option value='' disabled>
          {placeHolder}
        </option>

        {options.map((option) => (
          <option key={`${id}-opt-${option.value}`} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      {error && <span className='text-xs text-red-600'>{error.message}</span>}
    </div>
  );
}
