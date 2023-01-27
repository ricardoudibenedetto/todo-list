import { CompleteList } from "../components/completeList";
import { FormTodoList } from "../components/FormTodoList";
import { TodoList } from "../components/TodoList";
import { useCompleteList } from "../hooks/useCompleteList";
import { useTodoList } from "../hooks/useTodoList";

export const HomePage = () => {

    const { todoList, addItemTodoList, removeItemTodoList } = useTodoList();
    const { completeList, addToCompleteList, removeItemComplete } = useCompleteList();

    const tareaComplete = (item: string) => {
        removeItemTodoList(item);
        addToCompleteList(item);
    }

    const moveToTodoList = (item: string) => {
        removeItemComplete(item)
        addItemTodoList(item)
    }

    return (
        <>
            <h1>Todo list</h1>
            <hr />
            <FormTodoList addItemTodoList={addItemTodoList}/>
            <main className="d-flex">
                <TodoList todoList={todoList} tareaComplete={tareaComplete} />
                <CompleteList completeList={completeList} moveToTodoList={moveToTodoList} />
            </main>
        </>
    )
}
