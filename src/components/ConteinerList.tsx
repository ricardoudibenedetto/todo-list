
import { ReactElement } from "react"
import { TodoItem } from "./TodoItem"

interface Props {
    titleList: string,
    children: ReactElement
}

export const ConteinerList = ({ titleList, children }: Props) => {
    return (
        <>
            <section className="todoList">
                <h2>{titleList}</h2>
                {children}
            </section>
        </>
    )
}



