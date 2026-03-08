'use client';

import GenericInput from '../GenericInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { GenericSelect } from '../GenericSelect';
import Link from 'next/link';

const schema = yup.object({
  pokemon: yup.string().required('Selecione um Pokémon'),

  level: yup
    .number() // Mude de string() para number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .typeError('Deve ser um número')
    .required('O nível é obrigatório')
    .min(1, 'Nível mínimo é 1')
    .max(100, 'Nível máximo é 100'),

  hp: yup
    .number() // Mude de string() para number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .typeError('Deve ser um número')
    .required('O HP é obrigatório'),
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
      pokemon: '',
      level: 1,
      hp: 0,
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
        <GenericSelect
          id='pokemon-select'
          label='Escolha seu Pokémon'
          placeHolder='Selecione um Pokémon...'
          register={register('pokemon')}
          error={errors.pokemon}
          options={[
            { value: 'bulbasaur', text: 'Bulbasaur' },
            { value: 'charmander', text: 'Charmander' },
            { value: 'squirtle', text: 'Squirtle' },
            { value: 'pikachu', text: 'Pikachu' },
          ]}
        />

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
