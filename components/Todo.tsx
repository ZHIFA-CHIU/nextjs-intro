"use client";

import { completeTodo } from "@/utils/actions";
import { Todo as TodoType } from "@prisma/client";
import { useTransition } from "react";

type Props = {
  todo: TodoType;
};

const Todo = ({ todo }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? "line-through text-gray-600" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
