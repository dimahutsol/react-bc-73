import { TodosForm } from "components"

const Todos = () => {

    const onSubmit = (text) =>{
        console.log(text);
        
    }
  return (
    <div> <TodosForm onSubmit={onSubmit}/> </div>
  )
}

export default Todos