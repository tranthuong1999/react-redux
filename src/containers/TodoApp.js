

import { connect } from "react-redux";

import TodoApp from '../components/TodoApp';

import { addTodo , setTodo } from "../redux/todo";

const mapStateToProp =( state ) =>({
    todos : state.todo.items
})


const mapActionToProp ={
    addTodo,
    setTodo
}


export default connect(mapStateToProp, mapActionToProp)(TodoApp)





