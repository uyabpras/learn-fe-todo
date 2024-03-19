import React, { useState } from "react"

interface AddTodoFormProps{
    onsubmit: (title: string) => void;
}

export default function AddTodoForm({onsubmit}: AddTodoFormProps){
    const [input, setInput] = useState("");
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onsubmit(input);
        setInput("");
    }
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="what needs to be done?"
                className="rounded-s-md grow border border-black p-2 "
            />
            <button 
            type="submit"
            className="w-16 border rounded-e-md border-black bg-blue-500 text-white"
            >
                add
            </button>
        </form>
    )
}