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
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2"
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
        className="flex-1 rounded bg-slate-400 px-2 py-2"
      />
      <button type="submit" className="rounded bg-black px-3 py-2">
        추가
      </button>
    </form>
  );
};

export default TodoForm;
