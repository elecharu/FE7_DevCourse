import { useEffect, useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

interface TodoListProps {
  list: string[];
  removeFunction: (index: number) => void;
  editFunction: (index: number, newTodo: string) => void;
}

export default function TodoListItem({
  list,
  removeFunction,
  editFunction,
}: TodoListProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [editText, setEditText] = useState<string>("");

  const handleComplete = (index: number) => {
    // console.log(index);
    setCompletedItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleEditStart = (index: number, currentText: string) => {
    setEditingIndex(index);
    setEditText(currentText);
  };

  const handleEditSave = (index: number) => {
    editFunction(index, editText);
    setEditingIndex(null);
    clearInput();
  };

  const handleEditCancel = () => {
    setEditingIndex(null);
    clearInput();
  };

  const clearInput = () => {
    setEditText("");
  };

  return (
    <>
      {list && list.length > 0 ? (
        list.map((v, i) => (
          // 할 일이 완료되면 .todo__item--complete 추가
          // 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)
          // <input type="text" className="todo__modify-input" />

          <li
            className={`todo__item${completedItems.includes(i) ? " todo__item--complete" : ""}`}
            key={i}
          >
            {editingIndex === i ? (
              <>
                <input
                  type="text"
                  className="todo__modify-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    // console.log(e.key);
                    if (e.key === "Enter") {
                      handleEditSave(i);
                    } else if (e.key === "Escape") {
                      setEditText(v); // 편집 취소, 기존 데이터 원복
                      handleEditCancel();
                    }
                  }}
                />
                <div className="todo__button-group">
                  <Button
                    className="todo__action-button"
                    onClick={() => handleEditSave(i)}
                  >
                    <SvgPencil />
                  </Button>
                  <Button
                    className="todo__action-button"
                    onClick={handleEditCancel} // 편집 취소
                  >
                    <SvgClose />
                  </Button>
                </div>
              </>
            ) : (
              // 일반 모드
              <>
                <Checkbox
                  parentClassName="todo__checkbox-group"
                  type="checkbox"
                  className="todo__checkbox"
                  checked={completedItems.includes(i)}
                  onChange={() => handleComplete(i)}
                >
                  {v}
                </Checkbox>
                <div className="todo__button-group">
                  <Button
                    className="todo__action-button"
                    onClick={() => handleEditStart(i, v)}
                  >
                    <SvgPencil />
                  </Button>
                  <Button
                    className="todo__action-button"
                    onClick={() => removeFunction(i)}
                  >
                    <SvgClose />
                  </Button>
                </div>
              </>
            )}
          </li>
        ))
      ) : (
        // 데이터 없는 경우 임시 데이터 표시
        <li className={`todo__item`}>
          <Checkbox
            parentClassName="todo__checkbox-group"
            type="checkbox"
            className="todo__checkbox"
          >
            아침먹기
          </Checkbox>
          <div className="todo__button-group">
            <Button
              className="todo__action-button"
              onClick={() => removeFunction(0)}
            >
              <SvgPencil />
            </Button>
            <Button
              className="todo__action-button"
              onClick={() => editFunction(0, "아침먹기")}
            >
              <SvgClose />
            </Button>
          </div>
        </li>
      )}
    </>
  );
}
