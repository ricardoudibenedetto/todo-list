import { FormTodoList, ConteinerList } from "../components/";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../models/todo.api.models";


export const HomePage = () => {

    const { todos, todoAdd, todoComplete, todoIncomplete } = useTodo();
    const filtrarTodos = (todos: Todo[], todoDone: boolean): Todo[] => {
        return todos.filter(({ isComplete }: Todo) => isComplete == todoDone)
    }

    return (
        <>
            <h1>Todo list</h1>
            <hr />
            <FormTodoList addItemTodoList={todoAdd} />
            <main className="d-flex">
                <ConteinerList titleList="Pendings">
                    <ol>
                        {filtrarTodos(todos, false).map(({ description }: Todo) => (
                            <li className="d-flex justify-content-betwen"><p>{description}</p><button onClick={() => todoComplete(description)}>Completar </button></li>
                        ))}
                    </ol>
                </ConteinerList>
                <ConteinerList titleList="Completos">
                    <ol>
                        {filtrarTodos(todos, true).map(({ description }: Todo) => (
                            <li className="d-flex justify-content-betwen"><p className="texto-tachado">{description}</p> <button onClick={() => todoIncomplete(description)}>Descomplete </button></li>
                        ))}
                    </ol>
                </ConteinerList>
            </main>
        </>
    )
}
