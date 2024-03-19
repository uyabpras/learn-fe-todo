import TodoItem from "./TodoItem"
import { Todo } from "../type/todo"

interface TodolistProps{
    todos: Todo[];
    oncompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;

}

export default function Todolist({
    todos, 
    oncompletedChange, 
    onDelete
}: TodolistProps){

    const todosSorted = todos.sort((a,b) =>{
        if(a.completed === b.completed){
            return b.id - a.id;
        }
        return a.completed ?1 : -1;
    })

    return(
        <>
        <div className='space-y-2 py-5'>
          {todosSorted.map((todo) => (
            <TodoItem
            key={todo.id} 
            todo={todo} 
            oncompletedChange={oncompletedChange}
            onDelete={onDelete}
            />
          ))}
        </div>
            {todos.length === 0 && (
                <p className="text-center text-sm text-gray-500 space-y-2">
                    no todos yet. add a new one
                </p>
            )}
        </>
    )
}