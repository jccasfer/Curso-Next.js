import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { FileWatcherEventKind } from "typescript";


export async function GET(
    request: NextRequest, 
    {params} : {params: { id: string }}) {  //id pasado desde la url en realidad siempre es string, antes ponía number pero a eso no hace caso, era erroneo
    //recoger datos desde la BD
    //if not found return 404 error
    const user= await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });
    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404});

    return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest,
    {params} : {params: { id: string }}) {

    //Validar request body
    //if invalid, return 400
    //fetch user with a given id
    //if doesn´t exists, return 404
    //update the user
    //return the updated user
    const body = await request.json();
    const validation = schema.safeParse(body);    //usamos zod. Parse genera excepcion, safeParse solo
    if (!validation.success) //(!body.name)
        return NextResponse.json(validation.error.errors/*{error: 'Name is required'}*/, {status: 400});
    const user= await prisma.user.findUnique({
            where: {id: parseInt(params.id)}
        });
    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404});

    const updatedUser= await prisma.user.update({
        where: {id: user.id},
        data: { //recoger datos del body y no meter todo el body directamente por si usuario malicioso intenta cambiar otras propiedades
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(updatedUser)
}


export async function DELETE(
    request: NextRequest,
    {params} : {params: { id: string }}) {
    //fetch user with a given id
    //if doesn´t exists, return 404
    //delete the user
    //return 200
    const user= await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });
    if (!user)
        return NextResponse.json({error: 'User '+params.id+' not found'}, {status: 404});

    await prisma.user.delete({
        where: {id: parseInt(params.id)}
    })

    return NextResponse.json({}); //se puede devolver tb el objeto borrado
}