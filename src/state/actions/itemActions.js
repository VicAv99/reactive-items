import axios from 'axios';

const URL = 'https://react-apps-api.herokuapp.com/items';

export const FETCH_ITEMS = '[ITEM] Fetch Items';
export const ADD_ITEM = '[ITEM] Add Item';

export const fetchItems = () => dispatch => {
  axios.get(URL)
    .then(items =>
      dispatch({
        type: FETCH_ITEMS,
        payload: items.data
      })
    );
};

export const addItem = item => dispatch => {
  axios.post(`${URL}`, item)
    .then(item =>
      dispatch({
        type: ADD_ITEM,
        payload: item.data
      })
    );
};
