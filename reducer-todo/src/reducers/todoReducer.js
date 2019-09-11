export const initialState = {
    todoArray: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Feed the black cat',
    completed: false,
    id: 3892987590
  },
  {
    item: 'Call to Elon Musk',
    completed: true,
    id: 3892987591
  },
  {
    item: 'Make something important',
    completed: true,
    id: 3892987592
  }
]

}
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todoArray: [...state.todoArray, action.payload]
            };
        case 'COMPLETED':
            return {
                todoArray: state.todoArray.map(card => {
                    if (card.id === action.payload.cardID) {
                        return {...card, completed: !card.completed}
                    } else {
                        return card
                    }
                })
            };
        case 'DELETE_COMPLETED':
            return {
                todoArray: state.todoArray.filter( card => 
                    card.completed !== true
                )
            };
        case 'DELETE_CARD':
            return {
                todoArray: state.todoArray.filter( card => 
                    card.id !== action.payload.cardNewID
                )
            };
      default:
        return state;
    }
  };