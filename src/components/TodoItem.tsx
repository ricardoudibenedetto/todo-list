interface Props {
    item: string, 
    tareaComplete: Function
}
export const TodoItem = ({item, tareaComplete}: Props) => {
    return <li key={item}>
        {item}
        <span onClick={() => tareaComplete(item)}>✅</span>
    </li>
}