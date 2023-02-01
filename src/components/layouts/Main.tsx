import React from 'react'
import { useTodo } from '../../hooks/useTodo';
import { FormTodoList } from '../forms/FormTodoList';
import { TodoList } from '../lists/TodoList';
import { Card } from './Card';

export const Main = () => {
    return (
        <main className="main-area d-flex gap-20">
            <Card>
                <TodoList />
            </Card>
        </main>
    )
}
