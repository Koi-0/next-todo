import TodoContainer from "@/components/todo/TodoContainer";
import { QUERY_KEY } from "@/constants/constants";
import { getTodos } from "@/services/todo-services";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="mx-auto max-w-xl min-w-80">
        <TodoContainer />
      </main>
    </HydrationBoundary>
  );
};

export default Home;
