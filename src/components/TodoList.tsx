import { TodoItem } from "./TodoItem"

interface Props {
    todoList: string[],
    tareaComplete: Function
}

export const TodoList = ({ todoList, tareaComplete }: Props) => {
    return (
        <>
            <section className="todoList">
                {todoList.length > 0 ?
                    <><h2>Pendding</h2>
                        <ol>
                            {todoList.map((elementList: string) => (<>
                                <TodoItem item={elementList} tareaComplete={tareaComplete} />
                            </>
                            )
                            )}
                        </ol></>
                    : <h2>Not have Penddings</h2>}
            </section>
        </>
    )
}


