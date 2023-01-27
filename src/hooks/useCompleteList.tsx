import { useState } from "react";

export const useCompleteList = () => {

    const [completeList, setcompleteList] = useState<string[]>([])

    const addToCompleteList = (item: string) => {
        setcompleteList([...completeList, item]);
    }

    const removeItemComplete = (item: string) => {
        setcompleteList([...completeList.filter((element: string) => element != item)])
    }
    
    return {
        completeList,
        addToCompleteList,
        removeItemComplete
    }
}
