/*un fichero route.tsx gestiona peticiones HTTP
    En cada directorio solo podemos tener uno de estos: page.tsx (contenido para el usuario) o route.tsx
*/

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) { //request: NextRequest aunque no usemos en este ejemplo la request, al ponerla evitamos que haga caching.
    //recoger datos desde la BD
    const users = await prisma.user.findMany()
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    //validate, if error return 400 Bad Request
    const validation = schema.safeParse(body);    //usamos zod. Parse genera excepcion, safeParse solo
    if (!validation.success) //(!body.name)
        return NextResponse.json(validation.error.errors/*{error: 'Name is required'}*/, {status:400});

    const user= await prisma.user.findUnique({
        where: {email: body.email}
    });
    if (user)
        return NextResponse.json({error: 'User already exists'}, {status:400});
    
    const newUser= await prisma.user.create({
        data: { //recoger datos del body y no meter todo el body directamente por si usuario malicioso intenta cambiar otras propiedades
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(newUser, {status: 201} );
}

