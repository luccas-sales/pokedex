'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GenericInput from '../GenericInput';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  email: yup.string().required('O e-mail é obrigatório'),

  password: yup.string().required('A senha é obrigatória'),
});

type FormData = yup.InferType<typeof schema>;

export default function LoginForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Login Realizado com Sucesso!');

    router.push('/dashboard');

    reset();
  };

  return (
    <form
      className='flex flex-col gap-2 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <GenericInput
        id='email'
        label='E-mail'
        type='text'
        placeholder='seu@email.com'
        error={errors.email}
        register={register('email')}
      />

      <GenericInput
        id='password'
        label='Senha'
        type='password'
        placeholder='Sua senha'
        error={errors.password}
        register={register('password')}
      />

      <button
        className={`bg-asters-700 text-sm
                text-asters-50 font-bold py-2 px-4 rounded-md border-2 border-asters-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-asters-950 lg:hover:shadow-md ${isSubmitting ? 'animate-pulse' : ''} `}
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}
