import { Todo } from "../../models/todo.api.models"
import { ConteinerList } from "./ConteinerList"
import { TodoItem } from "../items/TodoItem"
import { FormTodoList } from "../forms/FormTodoList"
import { useTodo } from "../../hooks/useTodo"

interface Props {
    todoList: Todo[],
    handlerAccion: Function
}
export const TodoList = () => {
    const { todos, todoAdd, todoToggle } = useTodo();
    return (
        <ConteinerList titleList="Casa">
            <>
                <ol>
                    {todos.map(({ description, isComplete }: Todo) => (
                        <TodoItem description={description} isComplete={isComplete}>
                            <button className="button-circle" onClick={() => todoToggle(description)}>{`${!isComplete ? 'Done' : 'X'}`}</button>
                        </TodoItem>
                    ))}
                </ol>
                <FormTodoList addItemTodoList={todoAdd} />
            </>
        </ConteinerList>
    )
}


