"use client";

import { useState } from "react";
import { useTodosQuery } from "../queries/todo.queries";
import { Todo } from "@/types/todo.type";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTodoMutations } from "../mutations/todo.mutations";

const TodoContainer = () => {
  const [filterType, setFilterType] = useState<"all" | "completed" | "pending">(
    "all",
  );

  const { data: todos = [], isPending, isError } = useTodosQuery();
  const { addTodoMutation, updateTodoMutation, deleteTodoMutation } =
    useTodoMutations();

  const handleAddTodo = (title: string) => {
    const newTodo: Omit<Todo, "id"> = {
      title,
      completed: false,
    };
    addTodoMutation.mutate(newTodo);
  };

  const handleToggleComplete = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodoMutation.mutate(updatedTodo);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    updateTodoMutation.mutate(updatedTodo);
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterType === "completed") return todo.completed;
    if (filterType === "pending") return !todo.completed;
    return true;
  });

  if (isPending) return <p>로딩 중입니다...</p>;
  if (isError) return <p>에러가 발생했습니다.</p>;

  return (
    <section className="space-y-4 bg-blue-900">
      <TodoForm onAdd={handleAddTodo} />
      <div className="space-x-4 bg-yellow-200">
        {["all", "completed", "pending"].map((type) => (
          <button
            key={type}
            className={`rounded px-2 py-2 text-black ${
              filterType === type ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilterType(type as typeof filterType)}
          >
            {type === "all" ? "전체" : type === "completed" ? "완료" : "미완료"}
          </button>
        ))}
      </div>
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleComplete}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </section>
  );
};

export default TodoContainer;
