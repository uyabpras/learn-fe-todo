import { Todo } from "../type/todo"
import { Trash2 } from "lucide-react";

interface todoItemProps{
    todo: Todo;
    oncompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function todoItem({todo, oncompletedChange, onDelete}: todoItemProps){
    return(
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounded-md p-2 border-black bg-white hover:bg-slate-50 grow">
                <input 
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => oncompletedChange(todo.id, e.target.checked) }
                className="scale-125" 
                />
                <span className={todo.completed ? "line-through text-gray-500":""}>
                    {todo.title}
                </span>
            </label>
            <button
            onClick={() => onDelete(todo.id)} className="p-2">
                <Trash2 size={20} className="text-gray-500"/>
            </button>
        </div>
    )
}