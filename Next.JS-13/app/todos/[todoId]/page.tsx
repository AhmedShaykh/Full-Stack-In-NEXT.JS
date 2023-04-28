import React from 'react';
import Link from 'next/link';
import { Todo } from '@/Typings';
import { notFound } from "next/navigation";

export const dynamicParams = true;

interface Props {
    params: {
        todoId: string;
    }
};

const fetchTodo = async (todoId: string) => {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } }
    );

    const todo: Todo = await res.json();
    return todo;
};

const TodoPage = async ({ params: { todoId } }: Props) => {

    const todo = await fetchTodo(todoId);

    if (!todo.id) return notFound();

    return (
        <div className="text-center py-4">
            <div className="p-10 bg-slate-200 text-black border-2 m-4 shadow-lg font-semibold rounded-md">
                <p className='text-left'>
                    #{todo.id}: {todo.title}
                </p>
                <p className='text-left'>
                    Completed: {todo.completed ? "Yes" : "No"}
                </p>
                <p className="border-t border-black mt-5 text-right">
                    By User: {todo.userId}
                </p>
            </div>

            <Link href="/todos">
                <p className="font-medium text-2xl pt-8 text-blue-700 pointer">
                    Back To Todos Page
                </p>
            </Link>
        </div>
    )
};

export default TodoPage;

export async function generateStaticParams() {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos: Todo[] = await res.json();

    const trimmedTodos = todos.splice(0, 10);

    return trimmedTodos.map(todo => ({
        todoId: todo.id.toString()
    }));
};