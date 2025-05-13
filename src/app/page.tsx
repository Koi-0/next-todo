import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TodoContainer from "./components/TodoContainer";
import { getTodos } from "./api/todo-api";

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="mx-auto max-w-md space-y-4 bg-red-500 p-4">
        <h1 className="text-2xl font-bold">📝 Todo List</h1>
        <TodoContainer />
      </main>
    </HydrationBoundary>
  );
};

export default Home;
