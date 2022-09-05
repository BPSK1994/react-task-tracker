import React from 'react'
import Task from './Task'


const Tasks = function({
    tasks,
    onToggle,
    onDelete
}) {
    return(
        <div className = "tasks-container">
            {tasks.map(function(item) {
                return (
                    <Task 
                        key = {item.id}
                        task = {item}
                        onToggle = {onToggle}
                        onDelete = {onDelete}
                    />
                    )
                })}
            </div>
        )
    }


export default Tasks
