import axios from 'axios';

const url = 'http://localhost:4001/repuestos';

export const fetchRepuestos = () => axios.get(url);
