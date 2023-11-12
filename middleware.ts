//nombre middleware es interpretado por next.js como especial

//import { NextRequest, NextResponse } from "next/server"; para el ejemplo de abajo
/*
import middleware from "next-auth/middleware"; //next-auth ya tiene un middleware propio que se ejecutara si se cumple la config especificada aquí
export default middleware;
esto se puede hacer de forma mas corta así:*/
export { default } from "next-auth/middleware";

//la funcion que definimos aquí es ejecutada en cada request recibida. Ejemplo:
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }

//nombre especial que tambien mira React, para configurar cuando debe ejecutarse este middleware
export const config = {
    //para los parametros en el path
    //* -> zero or more parameters
    //+ -> one or more parameters
    //? -> zero or one
    matcher: ['/users/:id*']     //paths en los que se ejecutará: para /Users con el middleware exportado de next-auth exige authentication
}