import { ERROR_MESSAGES } from "@/constants/constants";
import { Todo } from "@/types/todo.type";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

// 전체 투두 가져오는 함수
export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(BASE_URL, { cache: "no-store" });
  if (!response.ok) throw new Error(ERROR_MESSAGES.FETCH_TODOS);
  return response.json();
};

// 투두 추가 함수
export const addTodo = async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) throw new Error(ERROR_MESSAGES.ADD_TODO);
  return response.json();
};

// 투두 수정 함수
export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/${todo.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error(ERROR_MESSAGES.UPDATE_TODO);
  return response.json();
};

// 투두 삭제 함수
export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(ERROR_MESSAGES.DELETE_TODO);
};
