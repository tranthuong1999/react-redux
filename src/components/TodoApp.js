import axios from "axios";
import { useState , useEffect} from "react";
// import { addTodo } from "../redux/todo";


export default function AddTodo({ todos , addTodo , setTodo}){
    
    const [ text , setText] = useState([])

    useEffect( () =>{

      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then( res =>{
        console.log("data" , res.data)
       setTodo(res.data)
      })
    },[setTodo])

return (
    <div>
    <h1> Name </h1>
    <input
    type="text"
    value ={ text }
    onChange={ (e) => setText(e.target.value)}
    />
    <button onClick={ () => {
      addTodo(text)
      setText("")
    }}> Add </button>
    <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        
      </ul>

    </div>
)
}


