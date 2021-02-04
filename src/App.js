import './App.css';
import React, {useState} from 'react'

//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
//state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilteredTodos] = useState([])

//Functions
const filterHandler = () => {
  switch(status) {
    case 'completed' :
      setFilteredTodos(todos.filter(todo => ))
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
    />
    </div>
  );
}

export default App;
