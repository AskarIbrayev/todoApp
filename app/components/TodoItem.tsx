'use client'

interface ITodoProps {
    id: string;
    title: string;
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

export default function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: ITodoProps) {
    return <li className="flex justify-between border-b border-slate-300 py-3"
    >
        <div>
            <input
                id={id}
                type="checkbox"
                className="mr-2 peer"
                defaultChecked={complete}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <label htmlFor={id} className={'cursor-pointer peer-checked:line-through'}>{title}</label>
        </div>
        <button
            onClick={() => deleteTodo(id)}
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded 
        hover:bg-slate-600 outline-none cursor-pointer'
        >
            Delete
        </button>
    </li>
}