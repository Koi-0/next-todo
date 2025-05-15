import {
  showCompleteSuccess,
  showDeleteSuccess,
  showUpdateSuccess,
} from "@/lib/toast";
import { TodoItemProps } from "@/types/todo.type";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import CustomAlertDialog from "../ui/custom-alert-dialog";
import { EVENT_KEYS, MESSAGES } from "@/constants/constants";

const TodoItem = React.memo(
  ({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);

    const handleEdit = () => setIsEditing(true);

    const handleDelete = () => {
      onDelete(todo.id);
      showDeleteSuccess(MESSAGES.TODO.DELETE, EVENT_KEYS.TODO_DELETE_SUCCESS);
    };

    const handleUpdate = () => {
      if (editedTitle.trim() === "") return;
      onUpdate({ ...todo, title: editedTitle });
      setIsEditing(false);
      showUpdateSuccess(MESSAGES.TODO.UPDATE, EVENT_KEYS.TODO_UPDATE_SUCCESS);
    };

    const handleCancel = () => {
      setIsEditing(false);
      setEditedTitle(todo.title);
    };

    const handleCheckboxChange = () => {
      onToggle(todo.id);
      if (!todo.completed) {
        showCompleteSuccess(
          MESSAGES.TODO.COMPLETE,
          EVENT_KEYS.TODO_COMPLETE_SUCCESS,
        );
      }
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
      <li className="justify-betwee flex items-center gap-2 rounded-md bg-[#F3E5AB] p-2 shadow-md">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleCheckboxChange}
        />

        {isEditing ? (
          <>
            <div className="flex h-8 flex-1 items-center gap-2">
              <Input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                autoFocusOnMount
                onKeyDown={handleKeyDown}
                className="bg-primary-foreground border-none"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleUpdate} variant="white">
                완료
              </Button>
              <Button onClick={handleCancel} variant="white">
                취소
              </Button>
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
              <Button onClick={handleEdit} variant="white">
                수정
              </Button>
              <CustomAlertDialog
                triggerLabel="삭제"
                title="삭제"
                description="정말 할 일을 삭제하시겠습니까?"
                confirmLabel="삭제하기"
                onConfirm={handleDelete}
              />
            </div>
          </>
        )}
      </li>
    );
  },
);

TodoItem.displayName = "TodoItem";

export default TodoItem;
