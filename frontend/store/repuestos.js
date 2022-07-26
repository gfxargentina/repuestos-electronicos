export default (repuestos = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;

    case 'CREATE':
      return repuestos;

    default:
      return repuestos;
  }
};
