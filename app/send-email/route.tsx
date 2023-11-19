/*
    Esto es un ejemplo de punto API desde el que enviar un email
    en una app real no se haría desde aquí sino desde le proceso de negocio (al hacer un pedido...)
*/

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_JEY);

export async function POST() {
    await resend.emails.send({
        from: '...',    //debe ser de un dominio del que sea propietario (no vale gmail.com, ...)
        //una vez lo tenemos, lo añadimos en la web de config de mi cuenta de resend.com, nuestro DNS
        to: 'jc@micuenta.com',
        subject: 'este es el subject',
        react: <WelcomeTemplate name="Mosh" />
    })

    return NextResponse.json({});
}