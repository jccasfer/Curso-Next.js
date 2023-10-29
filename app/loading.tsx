import React from 'react'

const Loading = () => {
  return (    
        <span className="loading loading-dots loading-lg"></span>
  )
}   /*los ficheros "loading" son interpretados por next.js como 
        especiales (como layout y page) y los cargará siempre mientras que
        este cargando un componente (segun carpeta en que esté)
        como con <suspense>
    */

export default Loading