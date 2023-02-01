import { ReactElement } from "react"

interface Props {
    description: string,
    isComplete: boolean,
    children: ReactElement
}
export const TodoItem = ({description, isComplete, children}: Props) => {
    return <li className="d-flex justify-content-betwen">
        <p>{description} {`${isComplete ? '✔' : ''}`}</p>
        {children}
</li>
}