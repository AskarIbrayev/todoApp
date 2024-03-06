import Link from "next/link";
import prisma from '@/db'
import TodoItem from "./components/TodoItem";
import { redirect } from "next/navigation";

function getTodos() {
  return prisma?.toDo.findMany()

}

async function toggleTodo (id: string, complete: boolean) {
  'use server'
  await prisma?.toDo.update({where: {id}, data: {
      complete
  }})
}

async function deleteTodo(id: string) {
  'use server'
  await prisma.toDo.delete({where: {id}})
  redirect('/')
}

export default async function Home() {

  const todos = await getTodos()

   return <>
    <header className='flex justify-between mb-4 '>
      <h1 className='text-2xl'>ToDos</h1>
      <Link
        className='border border-slate-300 text-slate-300 px-2 py-1 rounded 
      hover:bg-slate-600 outline-none' href='/new'
      >
        New
      </Link>
    </header>
    <ul>
      {todos.map(todo => <TodoItem
        key={todo.id}
        {...todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />)}
    </ul>
  </>

}