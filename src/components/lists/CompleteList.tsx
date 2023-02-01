import { Todo } from "../../models/todo.api.models"
import { ConteinerList } from "./ConteinerList"
import { TodoItem } from "../items/TodoItem"

interface Props {
    completeList: Todo[]
    handlerAccion: Function
}
export const CompleteList = ({ completeList, handlerAccion }: Props) => {
    return (
        <ConteinerList titleList="Completos">
            <ol>
                {completeList.map(({ description, isComplete }: Todo) => (
                    <TodoItem description={description} isComplete={isComplete}>
                        <button onClick={() => handlerAccion(description)}>Descomplete </button>
                    </TodoItem>
                ))}
            </ol>
        </ConteinerList>
    )
}
