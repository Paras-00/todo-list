import { useContext } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { TodoitemsContext } from "./todo-container";
function Item1({todoitem,tododate}){
  const {deleteitem} = useContext(TodoitemsContext);
  function Ondelete(){
    deleteitem(todoitem);
  }
  return <div className="container">
  <div className="row todo-row">
      <div className="col-6">{todoitem}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2"><button type="button" className="btn btn-danger todo-button" onClick={Ondelete}><RiDeleteBinFill size={20}/></button></div>
  </div>
  </div>
}
export default Item1;