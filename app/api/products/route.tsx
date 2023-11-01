import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    //recoger datos desde la BD
    const products= await prisma.product.findMany();
    return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);    //usamos zod. Parse genera excepcion, safeParse solo
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status:400});
    
    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    });

    return NextResponse.json(newProduct, {status: 201})
}