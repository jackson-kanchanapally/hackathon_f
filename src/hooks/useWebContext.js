import { WebContext } from "../context/WebContext";
import { useContext } from "react";
export const useWebContext=()=>{
    const context=useContext(WebContext)
    if(!context){
        throw Error('useWebContext must be added')
    }
    return context

}