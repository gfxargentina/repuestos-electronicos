import * as api from '../api/index.js';

export const getRepuestos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRepuestos();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
