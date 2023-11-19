import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCart'
import ProductCart from './components/ProductCart'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

import leyendas from '@/public/images/Leyendas 2017.jpg'; //imagenes locales:se importa la imagen como un objeto mas, desde carpeta public (se publica)
import { Metadata } from 'next/types'

/* Usamos Link Component de react para en vez
  de un a href para que no recargue todos los javascripts/fuentes... asociados a la pagina, 
  solo los del componente a ver*/

export default async function Home() {
  const session = await getServerSession(authOptions); //getServerSession se puede usar en Pages y en route handlers(api)

  return (
    <main className='relative h-screen'>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>

      <Image src={leyendas} alt="Leyendas17" /> {/*es preferible usar el compo de React Image, yaq ue ya devuelve la imagen con el tamaño optimizado según el dispositivo desde el que se esté viendo. Lo convierte y comprime directamente a formato webp */}
      <Image
        src='https://bit.ly/react-cover'
        alt="cover"
        width={300}       /*para imagenes remotas no puede detectar auto el tamaño, necesarios estos 2 params*/
        height={170}
        /*fill                      en vez de width y height con fill lo llena todo*/
        /*className="object-cover"  y con tailwind hacer que no pierda el aspect ratio*/
        /*sizes="(max-width: 480px) 100vw, (max-with: 768px) 50vw, 33vw" para que React optimize las img según el tamaño del disp*/
        quality={75}
        priority
      />


      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'sobreescribir lo del layout'
}
/* para coger los datos de metadata dinamicos. Ej datos de un articulo
export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('')
  return {
    title: 'product.title',
    description: 'product.descrip'
  }
}
*/
