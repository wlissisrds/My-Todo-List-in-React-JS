import './App.css';
import React, {useState, useEffect} from 'react'

//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilteredTodos] = useState([])
  
  //useEffcet
  //sempre executa as funções quando o estados de [todo ou status é alterado]
    useEffect(()=> {
      filterHandler();
      salveLocalTodos();
    }, [todos, status])

//Functions
const filterHandler = () => {
  switch(status) {
    case "completed" :
      setFilteredTodos(todos.filter(todo => todo.completed === true ))
      break;
    case "uncompleted" :
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}
//SAVE TO LOCAL STORAGE
const salveLocalTodos=()=>{
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}


  return (
    <div className="App">   
    <header>
      <h1>Wlissis Todo List </h1>
    </header>
    <Form 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    status={status}
    />

    <TodoList 
    setTodos={setTodos} 
    todos={todos}
    filterTodos={filterTodos}

    />
    </div>
  );
}

export default App;
