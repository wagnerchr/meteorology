import { NextResponse } from "next/server"
import prisma from "../../../../lib/db";


export async function GET() {
    try {
        const registers = await prisma.register.findMany();
        return Response.json({
            message: "OK", registers
        })
    } catch(err) {
        return NextResponse.json({
            message: "Error", err
        }, {
            status: 500
        })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json(); 
        const registers = await prisma.register.create({
            data: {
                titulo: body.titulo,
                chovendo: body.chovendo,
                alagamento: body.alagamento,
                qntChuva: body.qntChuva,
                temperatura: body.temperatura,
                umidade: body.umidade,
                umidadeSolo: body.umidadeSolo,
                vibracao: body.vibracao,
                createdAt: body.createdAt
            }
        })
        console.log("Registro criado com sucesso!", registers)
        return Response.json({
            message: "OK", registers
        })
    } catch(err) {
        return NextResponse.json({
            message: "Error", err
        }, {
            status: 500
        })
    }
}
