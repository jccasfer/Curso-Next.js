import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}



const UserDetailPage = ( {params: { id } }: Props) => {

if (id>10) notFound();  //vamos a decir que si es >10 no existe, para probar

  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage