import { connect } from "@/app/libs/mongo.db";
import { NextRequest, NextResponse } from 'next/server'
import CounterInstance from "@/app/models/counter";


export async function POST(request: NextRequest) {
    const { value, color } = await request.json()
    await connect();
    await CounterInstance.create({ value, color });
    return NextResponse.json({ message: "counter Instance created" }, { status: 201 })
}

export async function GET() {
    await connect();
    const instance = await CounterInstance.find();
    return NextResponse.json({ instance })
}