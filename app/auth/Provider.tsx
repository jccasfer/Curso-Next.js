'use client';

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

//AuthProvider es un wrapper arround SessionProvider
//este se ejecuta en cliente (Client component)
//   la info de user session esta en cliente
//React Context is unavailable in Server Components

const AuthProvider = ({ children }: { children: ReactNode }) => { //definimos interfaz de children, es un ReacNode, inline aquí directamente
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProvider