"use client";

import { TodoItemProps } from "@/types/todo.type";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  const handleUpdate = () => {
    if (editedTitle.trim() === "") return;
    onUpdate({ ...todo, title: editedTitle });
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <li className="flex items-center justify-between gap-2 border-b bg-red-300 p-2">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <>
          <div className="flex flex-1 items-center gap-2">
            <input
              className="flex-1 rounded bg-lime-400 px-2 py-1"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="text-green-600 hover:text-green-800"
            >
              완료
            </button>
            <button
              onClick={handleCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <p
            className={`flex-1 rounded bg-amber-900 px-2 py-1 ${
              todo.completed ? "text-gray-500 line-through" : ""
            }`}
          >
            {todo.title}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="text-blue-500 hover:text-blue-700"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
