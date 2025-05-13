"use client";

import { TodoItemProps } from "@/types/todo.type";

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between gap-2 border-b bg-red-300 p-2">
      <label className="flex items-center gap-2 bg-amber-400 p-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </label>
      <p
        className={`flex-1 bg-amber-900 px-2 py-1 ${todo.completed ? "text-gray-500 line-through" : ""}`}
      >
        {todo.title}
      </p>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-black px-2 py-1 text-red-500 hover:text-red-700"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
