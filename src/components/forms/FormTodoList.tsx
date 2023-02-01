import { useRef } from "react";
import "./style.css"
interface Props {
    addItemTodoList: Function
}
export const FormTodoList = ({addItemTodoList}: Props) => {
    const inputForm = useRef<HTMLInputElement>(null);
    const addItem = ($event: any) => {
        $event.preventDefault();
        if (inputForm.current!.value.trim().length < 1) return
        addItemTodoList(inputForm.current!.value);
        inputForm.current!.value = '';
    }
    return (
        <form className="d-flex gap-10" >
            <input type="text" name="todoItem" className="search" ref={inputForm} />
            <input type="submit" className="addElement" value="+" onClick={addItem} />
        </form>
    )
}
