import { connect } from "@/app/libs/mongo.db";
import CounterInstance from '@/app/models/counter'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { value } = await request.json();
    await connect();
    await CounterInstance.findByIdAndUpdate(id, { value });
    return NextResponse.json({ message: "Number updated" }, { status: 200 })
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    await connect();
    const number = await CounterInstance.findOne({ _id: id })
    return NextResponse.json({ number }, { status: 200 })
}