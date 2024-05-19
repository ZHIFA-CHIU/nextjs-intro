import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  return NextResponse.json({
    data: "hello",
  });
};

export const POST = async (request: Request) => {
  const data: { content?: string } = await request.json();
  if (!data.content) {
    return NextResponse.json({
      data: false,
    });
  }
  await prisma.todo.create({ data: { content: data.content } });
  return NextResponse.json({
    data: true,
  });
};
