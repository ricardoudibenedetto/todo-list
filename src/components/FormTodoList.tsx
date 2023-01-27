import { useRef } from "react";

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
        <form >
            <input type="text" name="todoItem" ref={inputForm} />
            <input type="submit" value="Add Item" onClick={addItem} />
        </form>
    )
}
