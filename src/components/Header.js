import React from 'react'
import Button from './Button'

const Header = function({
    toggleForm,
    showForm
}
) {
    
    return(
        <header className = "header header--flex" >
            <h1 className = "header__title">Task Tracker</h1>
                <Button 
                color = {showForm ? "red" : "green"}
                onClick = {toggleForm} 
                text = {showForm ? "Close" : "Add"}/>
        </header>
    )
}

export default Header