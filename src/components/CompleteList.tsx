
interface Props{
    completeList: string[]
    moveToTodoList: Function
}
export const CompleteList = ({completeList, moveToTodoList}: Props) => {
    return (
        <>
            {completeList.length > 0 ? <section className="todoList">
                <h2>Done</h2>
                <ol>
                    {
                        completeList.map((elementList: string) =>
                        (<>
                            <div className="d-flex">
                                <li className="texto-tachado" key={elementList}>
                                    {elementList}
                                </li>
                                <span onClick={() => moveToTodoList(elementList)}>❌</span>
                            </div>
                        </>
                        )
                        )
                    }
                </ol>
            </section> :
                <></>}
        </>
    )
}
