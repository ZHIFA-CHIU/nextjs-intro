"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const content = formData.get("content");
  if (!content) return;
  await prisma.todo.create({
    data: {
      content: content.toString(),
    },
  });
  revalidatePath("/todos");
};

export const completeTodo = async (id: string) => {
    await prisma.todo.update({data: {completed: true}, where: {id}})
    revalidatePath("/todos");
}
