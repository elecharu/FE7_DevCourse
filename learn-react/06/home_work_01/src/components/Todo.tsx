import { use, useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

// interface TodoListProps {
//   todoList: string[];
//   addTodoList: (newTodo: string) => void;
//   removeTodoList: (index: number) => void;
//   editTodoList: (index: number, newTodo: string) => void;
// }

export default function Todo() {
  const [todoList, setTodoList] = useState<Array<string>>([]);
  // const [todoList, setTodoList] = useState<Array<string>>(["1", "2", "3"]);

  const addTodoList = (newTodoList: string) => {
    setTodoList((prev) => [...prev, newTodoList]);
  };

  const removeTodoList = (index: number) => {
    // console.log(index);
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  const editTodoList = (index: number, newTodo: string) => {
    // console.log(index, newTodo);
    setTodoList((prev) =>
      prev.map((todo, i) => (i === index ? newTodo : todo))
    );
  };

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor addTodoList={addTodoList} />
        {/* 할 일 목록  */}
        <TodoList
          list={todoList}
          removeFunction={removeTodoList}
          editFunction={editTodoList}
        />
      </div>
    </>
  );
}
