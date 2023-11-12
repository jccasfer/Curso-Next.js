//help para iniciar en https://next-auth.js.org/configuration/initialization#route-handlers-app
// la carpeta se llama [...nextauth] osea parametro, y recoge todo lo que le llegue como parametro (...)

import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

//exportamos el objeto con las propiedades de la auth como una constante a parte para poder usarla desde fuera de este modulo
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,           //! al final => si no está, nos marca como erroneo el valor de la vble ya que puede ser undefined, pero nosotros sabes que en el fichero .env está el valor, así que con ! para decirle al compilador typescript que no de error que sabemos que tiene valor
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })],
    session: {              //by default nuestra estrategia de session es jwt, pero cuando usamos un adapter, cambia la estrategia a database
        strategy: 'jwt'
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

/*
    Para usar como provider de autenticacion google:
    Crear credenciales en mi cloud de cuenta de google: 
        https://console.developers.google.com/apis/credentials
    he creado una CursoNexjs
        configurar la pantalla de consentimiento:
            datos basicos -> external nombre, app, emails
            Permisos -> agregamos userinfo.email, userinfo.profile
            añadir usuarios de prueba -> mi email, Mientras el estado de publicación sea “Prueba”, solo los usuarios de prueba podrán acceder a la app
        volver a Credenciales
            Crear Credenciales -> ID de Cliente OAuth
                Tipo: Aplicacion Web
                Nombre: App Cruso Next.js
                Agregar URI: http://localhost:3000
                URI de redireccionamiento autorizados: http://localhost:3000/api/auth/callback/google
                    ver en la documentacion de nextAuth.js (https://next-auth.js.org/providers/google)
            Copiar valores creados en el .env
                ID Cliente
                Secreto de Cliente


*/