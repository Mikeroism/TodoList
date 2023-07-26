import {TodoItem} from './TodoItem';


export function TodoList({todos, toggleTodo, deleteTodo}) { 


    return ( 

        <ul className ='list'> 
         {todos.length === 0 && 'Nothing here'}
         {todos.map((todo) => { 
              return ( 
                 <TodoItem {...todo} toggleTodo = {toggleTodo} deleteTodo ={deleteTodo} 
                   key ={todo.id}  />
              )
         })}
            </ul>
    )
}

