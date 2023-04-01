import React from 'react';
import Link from 'next/link';
import { Todo } from '@/Typings';

interface Props {
    params: {
        todoId: string;
    }
};

const fetchTodo = async (todoId: string) => {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );

    const todo: Todo = await res.json();
    return todo;
};

const TodoPage = async ({ params: { todoId } }: Props) => {

    const todo = await fetchTodo(todoId);

    return (
        <div className="text-center py-4">
            <div className="p-14 bg-slate-200 text-black border-2 m-2 shadow-lg font-semibold">
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