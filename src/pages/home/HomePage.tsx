import { FormTodoList, TodoList } from "../../components";
import { useTodo } from "../../hooks/useTodo";
import { Header } from "../../components";
import "../home/style.css";
import { Main } from "../../components/layouts/Main";
export const HomePage = () => {

    
    return (
        <div className="conteiner">
           <Header />
           <Main />
        </div>
    )
}
