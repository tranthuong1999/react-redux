import { combineReducers , createStore , applyMiddleware } from "redux";


import todoReducer from "./todo";

const reducer = combineReducers({
    todo : todoReducer
})

// function myMiddleWare(store){
//     return function(next){
//         return function(action){

//         }
//     }
// }


// const myMiddleWare = store => next => action =>{
//    if( action.type === "ADD_TODO" && action.payload ==="fuck"){
//        action.payload ="******"
//    }
//    return next(action)
// }


export default  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(myMiddleWare)
) ;