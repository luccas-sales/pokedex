'use client';

import GenericInput from '../GenericInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

import Link from 'next/link';
import { GenericSelect } from '../GenericSelect';

const schema = yup.object({
  name: yup.string().required('Digite o nome do Pokémon'),

  pokedexId: yup
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

  image: yup
    .string()
    .url('Deve ser uma URL válida')
    .required('A URL da imagem é obrigatória'),
});

type FormData = yup.InferType<typeof schema>;

export default function AddPokemonForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      pokedexId: 1,
      type: '',
      level: 1,
      hp: 0,
      image: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Dados prontos:', data);
    alert('Pokémon Adicionado com Sucesso!');
    reset();
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
            id='pokedexId'
            label='Id na Pokedex'
            type='number'
            placeholder=''
            error={errors.pokedexId}
            register={register('pokedexId', { valueAsNumber: true })}
          />

          <GenericSelect
            id='type'
            label='Escolha o tipo'
            placeHolder='Selecione um tipo...'
            register={register('type')}
            error={errors.type}
            options={[
              { value: 'fogo', text: 'Fogo' },
              { value: 'agua', text: 'Agua' },
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
            placeholder=''
            error={errors.level}
            register={register('level', { valueAsNumber: true })}
          />

          <GenericInput
            id='hp'
            label='HP'
            type='number'
            placeholder=''
            error={errors.hp}
            register={register('hp', { valueAsNumber: true })}
          />
        </div>

        <GenericInput
          id='image'
          label='URL da Imagem'
          type='text'
          placeholder='Ex: https://imagem-pikachu...'
          error={errors.image}
          register={register('image')}
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
          {isSubmitting ? 'Adicionando...' : 'Adicionar'}
        </button>
      </div>
    </form>
  );
}
