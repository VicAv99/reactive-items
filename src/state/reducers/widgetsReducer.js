import { widgetTypes } from '../actions/widgetActions';

const initialState = {
  selectedWidget: {},
  widgets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case widgetTypes.SELECT_WIDGET: {
      return Object.assign({}, state, { selectedWidget: action.payload })
    };
    case widgetTypes.FETCH_WIDGETS: {
      return {
        ...state,
        widgets: action.payload
      };
    };
  default:
    return state
  }
}
