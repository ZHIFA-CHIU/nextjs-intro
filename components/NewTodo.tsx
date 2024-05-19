import { createTodo } from "@/utils/actions";

const NewTodo = () => {
  return (
    <div>
      <form action={createTodo} className="">
        <input name="content" type="text" className="border border-black"/>
        <button type="submit">New Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
