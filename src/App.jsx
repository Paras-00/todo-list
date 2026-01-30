import Todobar from "./todobars"; 
import Todo from "./todoapp";
import "./apptodo.css";
import Todoitems from "./todoitems";
import Message from "./Message"
import TodoitemsContextProvider ,{TodoitemsContext} from "./todo-container";
import { useContext } from "react";
function AppContent() {
  const { todoitem } = useContext(TodoitemsContext);
  return (
    <>
      <Todo />
      <Todobar />
      {todoitem.length === 0 && <Message />}
      <Todoitems />
    </>
  );
}
function App() {
  return <center className = "todo-container">
    <TodoitemsContextProvider>
    <AppContent/>
   </TodoitemsContextProvider>
 </center>
}

export default App;
