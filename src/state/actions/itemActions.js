const URL = 'https://react-apps-api.herokuapp.com/items';

export const FETCH_ITEMS = '[ITEM] Fetch Items';

export const fetchItems = () => dispatch => {
  fetch(URL)
    .then(res => res.json())
    .then(items =>
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      })
    );
};
