import { useContext, useState } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { TodoitemsContext } from "./todo-container";

function Todobar(){
  let[itemdate,setdate] = useState('');
  let[itemname,setitem] = useState('');
  const {additem} = useContext(TodoitemsContext);
  function onAdd(e){
    e.preventDefault();
    additem(itemname,itemdate);
    setdate('');
    setitem('');
    
  }

  return <div className="container text-center">
    <form className="row todo-row" onSubmit = {additem}>
      <div className ="col-6"><input type="text" placeholder=" Enter Todo here " value={itemname} onChange={(e) => setitem(e.target.value)} className="form-control form-control-md" style={{ width: "350px", marginLeft : "120px" }}></input></div>
      <div className="col-4"><input type = "date" value={itemdate} onChange={(e) => setdate(e.target.value)}className="form-control form-control-md" style={{ width: "350px", marginLeft:"20px"}}></input></div>
      <div className="col-2"><button type="button" className ="btn btn-success todo-button" onClick={onAdd}><BiSolidCartAdd size={20}></BiSolidCartAdd></button></div>
      </form>
  </div>
}
export default Todobar;
