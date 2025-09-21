import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

interface TodoListProps {
  list: string[];
  removeFunction: (index: number) => void;
  editFunction: (index: number, newTodo: string) => void;
}

export default function TodoList({
  list,
  removeFunction,
  editFunction,
}: TodoListProps) {
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {/* <TodoListEmpty /> */}
        {/* 할 일 목록이 있을 때 */}
        {list && list.length > 0 ? (
          <TodoListItem
            list={list}
            removeFunction={removeFunction}
            editFunction={editFunction}
          />
        ) : (
          <TodoListEmpty />
        )}
      </ul>
    </>
  );
}
