import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server"
    const title = data.get('title')?.valueOf()
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error('Invalid title')
    }
    await prisma?.toDo.create({data: {
        title, complete: false
    }})
    redirect('/')
}

export default function NewPage() {

    return <>
        <header className="mb-4">
            <h1 className='text-2xl'>Add new todo</h1>
        </header>
        <form action={createTodo} className='flex flex-col gap-3'>
            <input
                type="text"
                name="title"
                className='border text-slate-300 border-slate-300 rounded bg-transparent outline-none px-2 py-1'
                autoFocus
            />
            <div className='flex justify-end gap-2'>
                <Link
                    className='border border-slate-300 text-slate-300 px-2 py-1 rounded 
                hover:bg-slate-700 outline-none cursor-pointer'
                    href='..'
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className='border border-slate-300 text-slate-300 px-2 py-1 rounded 
                hover:bg-slate-700 outline-none cursor-pointer'
                >
                    Create
                </button>
            </div>
        </form>
    </>
}