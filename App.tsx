import './App.css'
import AddTodoForm from './components/AddTodoForm';
import Todolist from './components/TodoList';
import TodoSummary from './components/TodoSummary';
import useTodos from './hooks/useTodos';

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    DeleteTodo,
    deleteAllCompleted
  } = useTodos();
  
  return (
    <main className='py-10 bg-blue-400 h-screen'>
      <h1 className='font-bold text-3xl text-center py-5'>
        hello world
      </h1>
      <div className='max-w-lg mx-auto p-5 border rounded-lg border-black bg-blue-100'>
        <AddTodoForm onsubmit={addTodo}/>
        <Todolist todos={todos} 
        oncompletedChange={setTodoCompleted} 
        onDelete={DeleteTodo} 
        />
      </div>
      <TodoSummary
      todos={todos}
      deleteAllCompleted={deleteAllCompleted}
      />
    </main>
  );
}

export default App;
