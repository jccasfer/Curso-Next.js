'use client';
import React from 'react'

interface Props {
    error: Error,
    reset: () => void;
}

const ErrorPage = ({error, reset} : Props) => {

  console.log(error);   //enviarlo a logging

  return (
    <>    
    <div>An unexpected error has ocurred.</div>
    <button className="btn" onClick={()=>reset()}>Retry</button>
    </>
  )
}   /*los ficheros "error" son interpretados por next.js como 
    especiales (como layout y page) y definen un componente
    que se cargará en caso de que se dé un error no controlado en algún
    componente de la aplicacion.
    
    Debe ser un componente de cliente para manejar la llamada a reset() si lo usamos

    */

export default ErrorPage