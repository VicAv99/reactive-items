import axios from 'axios';

const URL = 'https://react-apps-api.herokuapp.com/widgets';

export const widgetTypes = {
  SELECT_WIDGET : '[WIDGET] Select Widget',
  FETCH_WIDGETS : '[WIDGET] Fetch Widgets',
  ADD_WIDGET    : '[WIDGET] Add Widget',
  UPDATE_WIDGET : '[WIDGET] Update Widget',
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

export const addWidget = widget => dispatch => {
  axios.post(URL, widget)
    .then(widget =>
      dispatch({
        type: widgetTypes.ADD_WIDGET,
        payload: widget.data
      })
    )
}

export const updateWidget = widget => dispatch => {
  axios.patch(`${URL}/${widget.id}`)
    .then(widget =>
      dispatch({
        type: widgetTypes.UPDATE_WIDGET,
        payload: widget
      })
    )
}

export const deleteWidget = widgetId => dispatch => {
  axios.delete(`${URL}/${widgetId}`)
    .then(widget =>
      dispatch({
        type: widgetTypes.DELETE_WIDGET,
        payload: widgetId
      })
    )
}
