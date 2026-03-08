'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GenericInput from '../GenericInput';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  username: yup
    .string()
    .min(3, 'Usuário deve ter no mínimo 3 caracteres')
    .max(20, 'Usuário deve ter no máximo 20 caracteres')
    .matches(
      /^[a-zA-Z0-9_]+$/,
      'Usuário pode conter apenas letras, números e _',
    )
    .required('Usuário é obrigatório'),

  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),

  password: yup
    .string()
    .min(8, 'A senha deve conter no mínimo 8 caracteres')
    .required('A senha é obrigatória'),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
});

type FormData = yup.InferType<typeof schema>;

export default function RegisterForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Registro Realizado com Sucesso!');

    router.push('/dashboard');

    reset();
  };

  return (
    <form
      className='flex flex-col gap-2 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <GenericInput
        id='username'
        label='Usuário'
        type='text'
        placeholder='Ex: Ash_Cash'
        error={errors.username}
        register={register('username')}
      />

      <GenericInput
        id='email'
        label='E-mail'
        type='text'
        placeholder='seu@email.com'
        error={errors.email}
        register={register('email')}
      />

      <div className='flex gap-4'>
        <GenericInput
          id='password'
          label='Senha'
          type='password'
          placeholder='Sua senha'
          error={errors.password}
          register={register('password')}
        />
        <GenericInput
          id='passwordConfirm'
          label='Confirmar Senha'
          type='password'
          placeholder='Repita a senha'
          error={errors.passwordConfirm}
          register={register('passwordConfirm')}
        />
      </div>

      <button
        className={`bg-asters-700 text-sm
                text-asters-50 font-bold py-2 px-4 rounded-md border-2 border-asters-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-asters-950 lg:hover:shadow-md ${isSubmitting ? 'animate-pulse' : ''} `}
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Criando...' : 'Criar Conta'}
      </button>
    </form>
  );
}
