import axios from 'axios';

const URL = 'https://react-apps-api.herokuapp.com/widgets';

export const widgetTypes = {
  SELECT_WIDGET : '[WIDGET] Select Widget',
  FETCH_WIDGETS : '[WIDGET] Fetch Widgets',
  ADD_WIDGET    : '[WIDGET] Add Widget',
  DELETE_WIDGET : '[WIDGET] Delete Widget'
};

export const selectWidget = widget => dispatch => {
  dispatch({
    type: widgetTypes.SELECT_WIDGET,
    payload: widget
  });
}

export const fetchWidgets = () => dispatch => {
  axios.get(URL)
    .then(widgets =>
      dispatch({
        type: widgetTypes.FETCH_WIDGETS,
        payload: widgets.data
      })
    );
}
