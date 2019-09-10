import React, { useState, useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'

import { initialState, todoReducer } from '../reducers/todoReducer';




function TodoCards() {

  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="CardBlock">
      <div className="TodoForm">
        <h2>Add new todo!</h2>
        <input
          type="text"
          placeholder="New todo here"
          name="newToDo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: {item: newTodo, completed: false, id: new Date()} })}>Add task</button>
        <div className="DelBtn">
          <button onClick={() => dispatch({ type: 'DELETE_COMPLETED' })}>Delete completed tasks</button>
        </div>
      </div>

      <div className="TodoCards">
        <div className="Main-Container">
            {state.todoArray.map((card) => (
              <div className="Card" key={card.id}>
                <h2>{card.item}</h2>
                <div>
                {card.completed ? (
                  <Icon name='check square outline' size='big' onClick={() => dispatch({ type: 'COMPLETED', payload: { cardID: card.id} })} />
                ) : (
                  <Icon name='times rectangle' size='big' onClick={() => dispatch({ type: 'COMPLETED', payload: { cardID: card.id} })} />
                )}
                </div>
              </div>
             
            ))}
        </div>
      </div>
    </div>
  );
}

export default TodoCards;
