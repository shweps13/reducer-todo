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
      default:
        return state;
    }
  };