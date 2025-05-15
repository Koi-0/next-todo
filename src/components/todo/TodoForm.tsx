import { TodoFormProps } from "@/types/todo.type";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAdd(inputText);
      setInputText("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-4"
    >
      <Input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        ref={inputRef}
        placeholder="새로운 할 일을 입력하세요"
      />
      <Button type="submit" className="bg-[#2a83a6] text-white">
        추가
      </Button>
    </form>
  );
};

export default TodoForm;
