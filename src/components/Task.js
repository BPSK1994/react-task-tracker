import React from 'react'

const Task = function({
    task,
    onToggle,
    onDelete
}) {
    return(
        <div className = "task task--flex">
                        <button className = {`buttonReminder ${task.reminder ? "reminder" :"noReminder" }`}  onDoubleClick = {function(){return onToggle(task.id)}}></button>    
                        <div className = "task__content">
                            <div className = "task__heading">
                                <h3 className = "task__title">{task.text}</h3>
                                <i className = "fa-solid fa-xmark" onClick = {function(){return onDelete(task.id)}}></i>
                            </div>
                            <p className = "task__time">{task.day}</p>
                        </div>
                    </div>

    )
}


export default Task