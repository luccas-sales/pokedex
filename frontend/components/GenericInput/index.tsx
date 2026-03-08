import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface input {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export default function GenericInput({
  id,
  label,
  type,
  placeholder,
  register,
  error,
}: input) {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm' htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        className='border border-asters-300 w-full px-3 py-1 rounded-lg outline-none'
        type={type}
        placeholder={placeholder}
        {...register}
      />

      {error && <span className='text-xs text-red-600'>{error.message}</span>}
    </div>
  );
}
