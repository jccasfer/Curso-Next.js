/*un fichero route.tsx gestiona peticiones HTTP
    En cada directorio solo podemos tener uno de estos: page.tsx (contenido para el usuario) o route.tsx
*/

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) { //request: NextRequest aunque no usemos en este ejemplo la request, al ponerla evitamos que haga caching.
    //recoger datos desde la BD
    return NextResponse.json([
        {id: 1, name: 'JC'},
        {id: 2, name: 'Mosh'}
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    //validate, if error return 400 Bad Request
    const validation = schema.safeParse(body);    //usamos zod. Parse genera excepcion, safeParse solo
    if (!validation.success) //(!body.name)
        return NextResponse.json(validation.error.errors/*{error: 'Name is required'}*/, {status:400});

    return NextResponse.json(
        {id: 69, name: body.name},   //simulamos generación de id
        {status: 201}                //created
    );
}

