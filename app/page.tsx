import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCart'
import ProductCart from './components/ProductCart'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

/* Usamos Link Component de react para en vez
  de un a href para que no recargue todos los javascripts/fuentes... asociados a la pagina, 
  solo los del componente a ver*/

export default async function Home() {
  const session = await getServerSession(authOptions); //getServerSession se puede usar en Pages y en route handlers(api)

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  )
}
