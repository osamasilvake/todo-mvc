import TodosFooter from "../todos-footer/TodosFooter"
import TodosHeader from "../todos-header/TodosHeader"
import { TodosInfo } from "../todos-info/TodosInfo"
import TodosMain from "../todos-main/TodosMain"
import "./Todos.css";

const Todos = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="todoapp">
      <TodosHeader />
      <TodosMain />
      <TodosFooter />
    </div>
    <TodosInfo />
  </div>
  )
}

export default Todos
