import Item1 from "./todoitem";
import "./apptodo.css"
import { useContext } from "react";
import { TodoitemsContext } from "./todo-container";
const Todoitems = () => {
  const {todoitem} = useContext(TodoitemsContext);
  return (
  <div className="todo-items">
    {todoitem.map((i,index) => (
      <Item1 key = {index} todoitem={i.name} tododate={i.date} ></Item1>
    ))}
    </div>
  );
};
export default Todoitems;