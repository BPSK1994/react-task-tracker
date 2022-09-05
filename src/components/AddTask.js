import React from 'react'


const AddTask = function({
    onAdd
}) {
    
    const[formData, setFormData] = React.useState({
        text: "",
        day: "",
        reminder: false
    })
    
    const handleChange = function(event) {
        const {name, value, type, checked} = event.target
        return(
            setFormData(function(formData) {
                return (
                    { ...formData, [name] : (type === "checkbox") ? checked : value}
                )
            })
        )
    }


    const onSubmit = function(event) {
        event.preventDefault()
        onAdd(formData)
        return (
            setFormData({
                text: "",
                day: "",
                reminder: false
            })
        )
    }
    
    
    return(
        <form className = "form" onSubmit = {onSubmit}>
            <div className= "form-control">
                <label htmlFor = "addTask">Add Task</label>
                <input 
                    id = "addTask"
                    name = "text"
                    type = "text"
                    placeholder = "Add task"
                    value = {formData.text}
                    onChange = {handleChange}
                />
            </div>
            
            <div className = "form-control">
                <label htmlFor = "dayAndTime">Day & Time</label>   
                <input 
                    id = "dayAndTime"
                    name = "day"
                    type = "text"
                    placeholder = "Add day and time"
                    value = {formData.day}
                    onChange = {handleChange}
                /> 
            </div>

            <div className = "form-control-check">
                <label htmlFor = "reminder">Set reminder</label>
                <input 
                    id = "reminder"
                    type = "checkbox"
                    name = "reminder"
                    checked = {formData.reminder}
                    onChange = {handleChange}
                />
            </div>

            <button className = "submitBtn">Submit</button>
        </form>
    )
}


export default AddTask