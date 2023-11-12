//help para iniciar en https://next-auth.js.org/configuration/initialization#route-handlers-app
// la carpeta se llama [...nextauth] osea parametro, y recoge todo lo que le llegue como parametro (...)

import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

//exportamos el objeto con las propiedades de la auth como una constante a parte para poder usarla desde fuera de este modulo
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        //Para usar credenciales propias guardadas en BD. This functionality is intentionally limited to discourage use of passwords due to the inherent security risks associated with them and the additional complexity associated with supporting usernames and passwords.
        //https://next-auth.js.org/providers/credentials
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Your Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'you@domain.com' },
                password: { label: 'Password', type: 'password', placeholder: 'password' }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                if (!credentials?.email || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });
                if (!user) return null;
                //bcrypt lo hemos añadido por npx i para ayudarnos con poder tener passwords encriptados
                const passwordsMatch = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword!
                );
                return passwordsMatch ? user : null;
            }
        }),

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