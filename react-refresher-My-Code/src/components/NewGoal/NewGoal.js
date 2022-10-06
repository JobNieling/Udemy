import React from "react";

import './NewGoal.css';

const NewGoal = props => {

    const addGoalHandler = event => {
        event.preventDefault();

        const NewGoal = {
            id: Math.random().toString(),
            text: 'My new goal!'
        };

        props.onAddGoal(NewGoal);
    };

    return ( 
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type='text' />
            <button type='submit'>Add Goal</button>
        </form>
    )
};

export default NewGoal;