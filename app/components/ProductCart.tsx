import React from 'react'
import AddToCart from './AddToCart';
//import styles from './ProductCart.module.css' para usar mis modulos css



const ProductCart = () => {
  return (
    //<div className={styles.card}> tiramos directamente de tailwind
    //<div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'> 
    <div>
        <AddToCart />
    </div>
  )
}

export default ProductCart