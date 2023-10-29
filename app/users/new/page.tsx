'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

/*
  Programmatic Navigation.
  usamos useRouter (OJO importar desde next/navigation) para enviar cambios
  esto es un componente de cliente, no de server
*/

const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className='btn btn-primary' 
    onClick={() =>{router.push('/users')}}>Create</button>
  )
}

export default NewUserPage