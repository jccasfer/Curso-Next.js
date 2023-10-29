import React from 'react'

const NotFoundPage = () => {
  return (
    <div>The requestes page doesn&apos;t exist</div>
  )
}    /*los ficheros "not-found" son interpretados por next.js como 
    especiales (como layout y page) y los cargará siempre que no se
    encuentre una página. Podemos poner diferentes en cada carpeta.    
    */

export default NotFoundPage