import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";


export function GET(
    request: NextRequest, 
    {params} : {params: { id: number }}) {
    //recoger datos desde la BD
    //if not found return 404 error
    if (params.id > 10)
        return NextResponse.json({error: 'User not found'}, 
                                 {status: 404});

    return NextResponse.json([
        {id: 1, name: 'JC'},
    ]);
}

export async function PUT(
    request: NextRequest,
    {params} : {params: { id: number }}) {

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
    if (params.id>10)
        return NextResponse.json({error: 'User not found'}, {status: 404});

    return NextResponse.json({id: 2, name: body.name})
}


export function DELETE(
    request: NextRequest,
    {params} : {params: { id: number }}) {
    //fetch user with a given id
    //if doesn´t exists, return 404
    //delete the user
    //return 200
    if (params.id > 10)
        return NextResponse.json({error: 'User not found'}, {status: 404});

    return NextResponse.json({}); //se puede devolver tb el objeto borrado
}