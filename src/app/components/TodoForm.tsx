import { TodoFormProps } from "@/types/todo.type";
import { useState } from "react";

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAdd(inputText);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
