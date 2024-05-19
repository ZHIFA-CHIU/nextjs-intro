import TodoList from "@/components/TodoList";
import prisma from "@/lib/prisma";

const fetchTodos = async () => {
  const todos = await prisma.todo.findMany({});
  return todos;
}


const TodosPage = async () => {
  const todos = await fetchTodos();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
