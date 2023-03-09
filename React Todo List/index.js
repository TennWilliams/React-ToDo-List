function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Tuesday: Gymnastics @ 4PM',
      isCompleted: false,
    },
    {
      text: 'Wednesday: BasketBall Practice @ 6:30PM',
      isCompleted: false,
    },
    {
      text: 'Thursday: Volleyball @ 7PM',
      isCompleted: false,
    },
    {
      text: 'Saturday: Basketball Game',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        <h2>Kids Weekly Activities</h2>
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
