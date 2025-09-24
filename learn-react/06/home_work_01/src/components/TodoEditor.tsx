import { useRef, useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

interface TodoListProps {
  addTodoList: (newTodo: string) => void;
}

export default function TodoEditor({ addTodoList }: TodoListProps) {
  const [inputValue, setInputValue] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue) {
      addTodoList(inputValue ? inputValue : "");
      setInputValue("");
    }
  };

  return (
    <>
      <form className="todo__form" onSubmit={handleSubmit}>
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button className="todo__button" type="submit">
            Add
          </Button>
        </div>
      </form>
    </>
  );
}
