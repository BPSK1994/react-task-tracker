import React from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'

const App = function() {
    
    const [showForm, setShowForm] = React.useState(false)


    const[tasks, setTasks] = React.useState([
        {
            id: 1,
            text: "Grocery Shopping",
            day: "March 14th at 5:00 pm",
            reminder: true
        },
        {
            id: 2,
            text: "Dentist appointment",
            day: "March 15th at 11:00 am",
            reminder: false
        },
        {
            id: 3,
            text: "Office meeting",
            day: "March 15th at 2:30 pm",
            reminder: true
        }
    ] )
    

    // Toggle reminder

    const toggleReminder = function(id) {
        return(
            setTasks(tasks.map(function(item) {
                return(
                    (item.id === id) ? {...item, reminder: !item.reminder} : item
                )
            }))
        )
    }

    //Add Task 

    const addTask = function(item) {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, ...item}
        return(
            setTasks([...tasks, newTask])
            
        )
    }



    // Delete task 

    const deleteTask = function(id) {
        return(
            setTasks(tasks.filter(function(item) {
                return (
                    item.id !== id
                )
            }))
        )
    }


    // Show Form

    const toggleForm = function() {
        return (
            setShowForm(!showForm)
        )
    }



    
    return(
        <div className = "container">
            <Header toggleForm = {toggleForm}
                    showForm = {showForm}  />
            {showForm && <AddTask onAdd = {addTask}/>}
            <Tasks tasks = {tasks}
                   onToggle = {toggleReminder}
                   onDelete = {deleteTask}/>
        </div>
    )
}

export default App