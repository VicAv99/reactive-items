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
        items: [...state.items, action.payload]
      }
    }
    case itemTypes.DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    }
    default:
      return state;
  }
}
