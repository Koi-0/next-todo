import { TodoFormProps } from "@/types/todo.type";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { showError, showSuccess } from "@/lib/toast";
import { EVENT_KEYS, MESSAGES } from "@/constants/constants";

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAdd(inputText);
      showSuccess(MESSAGES.TODO.ADD, EVENT_KEYS.TODO_ADD_SUCCESS);
      setInputText("");
    } else {
      showError(MESSAGES.TODO.INPUT_REQUIRED, EVENT_KEYS.TODO_ADD_ERROR);
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
        autoFocusOnMount
        placeholder="새로운 할 일을 입력하세요"
      />
      <Button type="submit">추가</Button>
    </form>
  );
};

export default TodoForm;
