import * as actionType from '../actions/ActionType';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionType.LOAD_TODOS:
      return { ...state, todos: state.todos.concat(action.payload) }

    default:
      return state
  }
}

export default todosReducer;
