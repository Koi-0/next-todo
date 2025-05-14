import { TodoFormProps } from "@/types/todo.type";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
      className="flex items-center justify-center gap-4"
    >
      <Input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
      />
      <Button type="submit">추가</Button>
    </form>
  );
};

export default TodoForm;
