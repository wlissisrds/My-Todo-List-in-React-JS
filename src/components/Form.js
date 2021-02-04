import React from 'react';

const Form = ( { inputText ,setInputText, todos, setTodos,setStatus } ) => {
  //Here I can write js code and function
  const inptTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value)
  }

  //cadastro de TODOS objetos
  const submitToHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    //atualiza state para vazio
    setInputText(""); 
  };

  //selecionando items por estatus
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  }

    return(
        <form>
          {/*value={inputText} apaga o conteudo digitado no inout*/}
      <input value={inputText} onChange={inptTextHandler} type="text" className="todo-input" />
      <button onClick={submitToHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        )
}

export default Form;