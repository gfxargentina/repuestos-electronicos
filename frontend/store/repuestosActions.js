import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from './repuestosTypes.js';

export const getRepuestos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRepuestos();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRepuesto = (repuesto) => async (dispatch) => {
  try {
    const { data } = await api.createRepuesto(repuesto);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
