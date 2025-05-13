import TodoContainer from "./components/TodoContainer";

const Home = async () => {
  return (
    <main className="mx-auto max-w-md space-y-4 bg-red-500 p-4">
      <h1 className="text-2xl font-bold">📝 Todo List</h1>
      <TodoContainer />
    </main>
  );
};

export default Home;
