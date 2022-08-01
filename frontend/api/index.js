import axios from 'axios';
import Swal from 'sweetalert2';

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
  API.post('/repuestos', nuevoRepuesto)
    .then(function (response) {
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Se registro un nuevo aparato',
      });
    })
    .catch(function (error) {
      console.log(error.toJSON());
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: error.response.data,
      });
    });
