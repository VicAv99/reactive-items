import { widgetTypes } from '../actions/widgetActions';

const initialState = {
  widgets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case widgetTypes.FETCH_WIDGETS: {
      return {
        ...state,
        widgets: action.payload
      }
    }

  default:
    return state
  }
}
