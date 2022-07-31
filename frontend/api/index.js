import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchRepuestos = () => API.get('/repuestos');
export const createRepuesto = (nuevoRepuesto) =>
  API.post('/repuestos', nuevoRepuesto);
