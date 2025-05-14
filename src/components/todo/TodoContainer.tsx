"use client";

import { useTodoMutations } from "@/mutations/todo.mutations";
import { useTodosQuery } from "@/queries/todo.queries";
import { Todo } from "@/types/todo.type";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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
      <Tabs
        defaultValue="all"
        className="bg-red-300"
        value={filterType}
        onValueChange={(value) => setFilterType(value as typeof filterType)}
      >
        <TabsList>
          <TabsTrigger value="all">all</TabsTrigger>
          <TabsTrigger value="completed">completed</TabsTrigger>
          <TabsTrigger value="pending">pending</TabsTrigger>
        </TabsList>
      </Tabs>
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
