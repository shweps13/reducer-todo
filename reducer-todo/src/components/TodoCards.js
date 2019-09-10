import React, { useState, useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'

import { initialState, todoReducer } from '../reducers/todoReducer';




function TodoCards() {

  // const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div className="TodoCards">
      <div className="Main-Container">
          {state.map((card) => (
            <div className="Card" key={card.id}>
              <h2>{card.item}</h2>
              {card.completed === false && <Icon name='times rectangle' size='big' />}
              {card.completed === true && <Icon name='check square outline' size='big' />}
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoCards;
