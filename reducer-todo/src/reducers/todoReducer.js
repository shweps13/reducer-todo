export const initialState = [{
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
  }
];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };