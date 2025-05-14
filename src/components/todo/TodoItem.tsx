"use client";

import { TodoItemProps } from "@/types/todo.type";
import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

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
    <li className="justify-betwee flex items-center gap-2 rounded-md bg-amber-200 p-2 shadow-md">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <>
          <div className="flex h-8 flex-1 items-center gap-2">
            <Input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleUpdate}>완료</Button>
            <Button onClick={handleCancel}>취소</Button>
          </div>
        </>
      ) : (
        <>
          <p
            className={`h-8 flex-1 overflow-hidden rounded-md px-3 py-1 text-ellipsis whitespace-nowrap ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.title}
          </p>
          <div className="flex gap-2">
            <Button onClick={handleEdit}>수정</Button>
            <Button onClick={() => onDelete(todo.id)}>삭제</Button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
