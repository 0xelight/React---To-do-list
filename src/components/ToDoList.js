import React from  'react'
import ToDo from './ToDo'

const TodoList = ({tasks}) => (
    <React.Fragment>
        <h1>Voici la liste</h1>
        <ul className="list-group m-3">
            {
                tasks.map((task) => <ToDo task={task} key={task.id}/>)
            }
        </ul>
    </React.Fragment>  
    

)
export default TodoList