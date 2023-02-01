import { useState } from "react"
import { Todo } from "../models/todo.api.models"

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAdd = (description: string) => {
        if (description.trim().length < 1) return;
        if (todos.some((todo: Todo) => todo.description == description)) return;
        setTodos([...todos, { description, isComplete: false }])
    }

    const todoComplete = (description: string) => {
        setTodos([...todos.map((todo: Todo) => todo.description == description ? { ...todo, isComplete: true } : todo)])
    }
    
    const todoIncomplete = (description: string) => {
        setTodos([...todos.map((todo: Todo) => todo.description == description ? { ...todo, isComplete: false } : todo)])
    }

    const todoToggle = (description: string) => {
        setTodos([...todos.map((todo: Todo) => todo.description == description ? { ...todo, isComplete: !todo.isComplete } : todo)])
    }

    return {
        todos,
        todoAdd,
        todoToggle,
        todoComplete,
        todoIncomplete
    }
}
