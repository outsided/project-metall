import { useAppDispatch } from "@/store"
import { addTodo } from "@/store/todoSlice"

type TProps = {
    id:number,
    text:string,
}
export const TestRedax: React.FC<TProps>= ({id,text}) => {
    const disputch = useAppDispatch()
    
    
    return (
        <div>
            <button className="but" onClick={()=> disputch(addTodo())}>dsadsadasdasd</button>
        </div>
    )
}
