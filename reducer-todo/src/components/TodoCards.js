import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';




function TodoCards() {

  // const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div className="TodoCards">
        <div className="Card">
          <h2>{state.item}</h2>
            {state.completed == false &&
          <h2>
            Heyyo!
          </h2>
        }
        </div>
    </div>
  );
}

export default TodoCards;
