import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCart'
import ProductCart from './components/ProductCart'

/* Usamos Link Component de react para en vez
  de un a href para que no recargue todos los javascripts/fuentes... asociados a la pagina, 
  solo los del componente a ver*/

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link> 
      <ProductCart />
    </main>
  )
}
