import { combineReducers } from 'redux';

import itemsReducer from './itemsReducer';
import widgetsReducer from './widgetsReducer';

export default combineReducers({
  items: itemsReducer,
  widgets: widgetsReducer
});
