/*
    Una vez autenticado tenemos el token con toda su info en
    la cookie next-auth.session-token

    Esta ruta no se debe hacer en aplicaciones reales, pero la hacemos aquí
    para ver el contenido de ese token decodificado y poder acceder 
    a sus propiedades (en el caso actual, las que nos da google)

    {
        "name":"J C",
        "email":"jcfxxxx@gmail.com",
        "picture":"https://lh3.googleusercontent.com/a/ACg8ocIpEyF-YHe59rp_XUWjcoxpBYBlDOUZuHi4OnzyZLI5=s96-c",
        "sub":"1135851117457477xxxxx",     //es como el userid
        "iat":1699211611,                  //timestamp de emision del token
        "exp":1701803611,                  //timestamp de expiracion (30 dias)
        "jti":"bba75863-89a5-4b6c-a058-66dac0fxxxxx"
    }
*/

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = await getToken ({req: request});
    return NextResponse.json(token);
}
