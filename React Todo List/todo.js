function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div 
  title="click to delete activity"
  className="todo" onClick={handle}>{todo.text} (x)
  </div>
}
