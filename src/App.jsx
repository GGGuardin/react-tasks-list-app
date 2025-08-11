import TaskList from "./TaskList";

function App() {
  return (
    <>
      <main className="bg-zinc-900 max-h-screen h-screen">
        <h1 className="p-6 text-white font-bold text-2xl max-w-md mx-auto">Simple Tasks List</h1>
        <TaskList />
      </main>
    </>
  );
}

export default App;
