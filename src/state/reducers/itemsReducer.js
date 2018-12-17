import * as itemTypes from '../actions/itemActions';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case itemTypes.FETCH_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    }
    case itemTypes.ADD_ITEM: {
      return {
        ...state,
        item: [...state.items, action.payload]
      }
    }
    default:
      return state;
  }
}
