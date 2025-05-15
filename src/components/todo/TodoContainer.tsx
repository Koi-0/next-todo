"use client";

import { useTodoMutations } from "@/hooks/mutations/todo.mutations";
import { useTodosQuery } from "@/hooks/queries/todo.queries";
import { Todo } from "@/types/todo.type";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import CustomAlertDialog from "../ui/custom-alert-dialog";

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
    <section className="space-y-8 p-4">
      <TodoForm onAdd={handleAddTodo} />
      <Tabs
        defaultValue="all"
        value={filterType}
        onValueChange={(value) => setFilterType(value as typeof filterType)}
      >
        <div className="flex items-center justify-between">
          <CustomAlertDialog
            triggerLabel="💡 Tip"
            triggerVariant="outline"
            title="💡 Tip"
            description="할 일 내용이 길면 일부가 생략되어 ‘…’으로 표시될 수 있어요. 최대 35자 이내로 입력하면 전체 내용을 볼 수 있습니다!"
            confirmLabel="닫기"
            onConfirm={() => {}}
          />
          <TabsList>
            <TabsTrigger value="all">all</TabsTrigger>
            <TabsTrigger value="completed">completed</TabsTrigger>
            <TabsTrigger value="pending">pending</TabsTrigger>
          </TabsList>
        </div>
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
