import { Todo as TodoType } from "@prisma/client"
import Todo from "./Todo"

type Props = {
    todos: TodoType[]
}

const TodoList = ({todos}: Props) => {
    return <div>
        {todos.map(todo => <Todo todo={todo} key={todo.id}  />)}
    </div>
}

export default TodoList