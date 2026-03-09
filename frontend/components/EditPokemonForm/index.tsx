'use client';

import GenericInput from '../GenericInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import { GenericSelect } from '../GenericSelect';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

const schema = yup.object({
  name: yup.string().required('Digite o nome do Pokémon'),

  pokedex_id: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .typeError('Deve ser um número')
    .min(1, 'Dever ser um número maior que 1')
    .required('O ID da Pokedex é obrigatório'),

  type: yup.string().required('O tipo é obrigatório'),

  level: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .typeError('Deve ser um número')
    .required('O nível é obrigatório')
    .min(1, 'Nível mínimo é 1')
    .max(100, 'Nível máximo é 100'),

  hp: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .typeError('Deve ser um número')
    .required('O HP é obrigatório'),

  image_url: yup
    .string()
    .url('Deve ser uma URL válida')
    .required('A URL da imagem é obrigatória'),
});

type FormData = yup.InferType<typeof schema>;

interface EditFormProps {
  id: number;
  pokedex_id: number;
  name: string;
  type: string;
  level: number;
  hp: number;
  image_url: string;
}

export default function EditPokemonForm({ ...initialData }: EditFormProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setErrorMessage('');

      const token = Cookies.get('token');
      const API = process.env.NEXT_PUBLIC_API_URL;

      const response = await axios.put(
        `${API}/pokedex/pokemons/${initialData.id}`,
        {
          name: data.name,
          pokedex_id: data.pokedex_id,
          type: data.type,
          level: data.level,
          hp: data.hp,
          image_url: data.image_url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        const errorMessage = (err.response.data as { message: string }).message;
        setErrorMessage(errorMessage);
      } else if (err.request) {
        setErrorMessage('O servidor não respondeu. Verifique sua conexão.');
      } else {
        setErrorMessage(`Erro de configuração: ${err.message}`);
      }
      return;
    }

    router.push('/dashboard');
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-4'>
        <GenericInput
          id='name'
          label='Nome do Pokémon'
          type='text'
          placeholder='Ex: Pikachu'
          error={errors.name}
          register={register('name')}
        />

        <div className='flex gap-4'>
          <GenericInput
            id='pokedex_id'
            label='Id na Pokedex'
            type='number'
            placeholder=''
            error={errors.pokedex_id}
            register={register('pokedex_id', { valueAsNumber: true })}
          />

          <GenericSelect
            id='type'
            label='Escolha o tipo'
            placeHolder='Selecione um tipo...'
            register={register('type')}
            error={errors.type}
            options={[
              { value: 'fogo', text: 'Fogo' },
              { value: 'agua', text: 'Água' },
              { value: 'eletrico', text: 'Elétrico' },
              { value: 'planta', text: 'Planta' },
              { value: 'gelo', text: 'Gelo' },
              { value: 'lutador', text: 'Lutador' },
              { value: 'veneno', text: 'Veneno' },
              { value: 'terra', text: 'Terra' },
              { value: 'voador', text: 'Voador' },
              { value: 'inseto', text: 'Inseto' },
              { value: 'pedra', text: 'Pedra' },
              { value: 'fantasma', text: 'Fantasma' },
              { value: 'sombrio', text: 'Sombrio' },
              { value: 'fada', text: 'Fada' },
              { value: 'normal', text: 'Normal' },
            ]}
          />
        </div>

        <div className='flex gap-4'>
          <GenericInput
            id='level'
            label='Nível'
            type='number'
            placeholder='1-100'
            error={errors.level}
            register={register('level', { valueAsNumber: true })}
          />

          <GenericInput
            id='hp'
            label='HP'
            type='number'
            placeholder='Ex: 100'
            error={errors.hp}
            register={register('hp', { valueAsNumber: true })}
          />
        </div>

        <GenericInput
          id='image'
          label='URL da Imagem'
          type='text'
          placeholder='Ex: https://imagem-pikachu...'
          error={errors.image_url}
          register={register('image_url')}
        />
      </div>

      <div className='flex flex-row justify-end gap-2 max-sm:flex-col-reverse'>
        <Link
          className='bg-red-700 text-center text-sm
                text-red-50 font-bold py-2 px-4 rounded-md border-2 border-red-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-red-950 lg:hover:shadow-md'
          href='/dashboard'
        >
          Cancelar
        </Link>

        <button
          className={`bg-green-700 text-sm
                text-green-50 font-bold py-2 px-4 rounded-md border-2 border-green-700/50 text-nowrap cursor-pointer transition-all duration-300 ease-out shadow-sm inset-shadow-sm active:scale-95 lg:active:scale-95 lg:hover:-translate-y-0.5 lg:hover:bg-green-950 lg:hover:shadow-md ${isSubmitting ? 'animate-pulse' : ''} `}
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Alterando...' : 'Alterar'}
        </button>
      </div>
      {errorMessage && (
        <p className='text-center text-xs text-red-600'>{errorMessage}</p>
      )}
    </form>
  );
}
