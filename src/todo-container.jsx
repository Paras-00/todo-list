import { useReducer } from "react";
import { createContext } from "react";

export const TodoitemsContext = createContext({todoitem : [],deleteitem: () => {},additem : () => {}});
const reducingstates = (currentval,action) => {
  if(action.type === "ADD_ITEM"){
    const newitem = {name : action.payload.itemname , date : action.payload.itemdate};
    return [... currentval,newitem];
  }else if(action.type === "DELETE_ITEM"){
    return currentval.filter((item)=>item.name !== action.payload.todoitemname);
  } else {
  return currentval;
  }
}
const TodoitemsContextProvider = ({children}) => {
  const[todoitem,dispatchtodoitem] = useReducer(reducingstates,[])
     
    const additem = (itemname,itemdate) => {
      const todoitemname = {
      type : "ADD_ITEM" ,
      payload : {itemname,
      itemdate,
      }
    }
      dispatchtodoitem(todoitemname)
    }
      const deleteitem = (todoitemname) => {
        const removeitemaction = {
          type : "DELETE_ITEM" ,
          payload : {todoitemname}
    }
        dispatchtodoitem(removeitemaction);
    }
    return (
    <TodoitemsContext.Provider value={{ todoitem , additem, deleteitem }} >{children}</TodoitemsContext.Provider>
    )
}
export default TodoitemsContextProvider