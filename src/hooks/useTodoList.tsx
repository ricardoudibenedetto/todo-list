import { useState } from "react"

export const useTodoList = () => {
    
    const [todoList, setTodoList] = useState<string[]>(['Cocinar'])

    const addItemTodoList = (item: string) => {
        setTodoList([...todoList, item])
    }
    const removeItemTodoList = (item: string) => {
        setTodoList([...todoList.filter((element: string) => element != item)])
    }

    return {
        todoList,
        addItemTodoList,
        removeItemTodoList
    }
}
