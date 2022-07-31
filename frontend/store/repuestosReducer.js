import { FETCH_ALL, CREATE, UPDATE, DELETE } from './repuestosTypes.js';

export default (repuestos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...repuestos, action.payload];

    default:
      return repuestos;
  }
};
