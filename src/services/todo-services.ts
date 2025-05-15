import { Todo } from "@/types/todo.type";

const BASE_URL = "http://localhost:3001/todos";

// 전체 투두 가져오는 함수
export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(BASE_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("할 일 목록을 불러오지 못했습니다.");
  return response.json();
};

// 투두 추가 함수
export const addTodo = async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) throw new Error("할 일을 추가하지 못했습니다.");
  return response.json();
};

// 투두 수정 함수
export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/${todo.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("할 일을 수정하지 못했습니다.");
  return response.json();
};

// 투두 삭제 함수
export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("할 일을 삭제하지 못했습니다.");
};
