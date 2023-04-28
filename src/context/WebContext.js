import {createContext,useReducer} from 'react'
export const WebContext=createContext()

export const webReducer=(state,action)=>{
    switch(action.type){
        case 'SET_DATA':
            return{
                Data:action.payload
            }
       
        case 'CREATE_DATA':
            return{
                Data:[action.payload,...state.Data]
            }
            case 'DELETE_DATA':
                return { 
                 Data: state.Data.filter(w => w._id !== action.payload._id) 
                }
        default:
            return state
    }
}
export const WebContextProvider=({children})=>{
    const [state,dispatch]=useReducer(webReducer,{
        Data:[]
    })
    return(
        <WebContext.Provider value={{...state,dispatch}}>
            {children}
        </WebContext.Provider>
    )
}