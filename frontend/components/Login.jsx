import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../store/authActions';

const initialstate = { email: '', password: '' };

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialstate);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signin(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mx-auto m-10">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
            <div className="w-3/5 p-5">
              <div className="text-left font-bold">Repuestos Electronicos</div>
              <div className="py-10">
                <h2 className="text-2xl font-bold text-green-500 mb-2">
                  Inicia Sesion en tu Cuenta
                </h2>
                <div className="border-2 w-20 border-green-500 inline-block mb-2"></div>
                {/* ICONS */}
                <div className="flex justify-center my-2 space-x-5">
                  <a
                    href="#"
                    className="border-2 border-gray-400 rounded-lg p-2 mx-1"
                  >
                    Google
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-400 rounded-lg p-2 mx-1"
                  >
                    Facebook
                  </a>
                </div>
                <p className="text-gray-500 my-3 mt-8">
                  o use su cuenta de email para ingresar
                </p>
                {/*  FORM */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 rounded flex items-center mb-5">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      className="bg-gray-100 border-transparent rounded-lg focus:border-gray-100 focus:ring-0  text-sm flex-1 "
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p-2 rounded flex items-center">
                    <input
                      type="password"
                      name="password"
                      placeholder="Su contraseña"
                      onChange={handleChange}
                      className="bg-gray-100 border-transparent rounded-lg focus:border-gray-100 focus:ring-0  text-sm flex-1 "
                    />
                  </div>
                  <div className="flex w-64 mt-2 justify-end">
                    <a href="#" className="text-xs hover:text-green-600">
                      Olvido su Contraseña?
                    </a>
                  </div>

                  <a
                    href=""
                    onClick={handleSubmit}
                    className="border-2 border-green-500 text-green-500 mt-10 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                  >
                    Inicia Sesion
                  </a>
                </div>
              </div>
            </div>

            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
              <h2 className="text-3xl font-bold mb-2">Hola Tecnico!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">
                Para poder comenzar a utilizar la plataforma necesitamos de ti
                solo unos cuantos datos para que seas un tecnico certificado.
              </p>
              <a
                href=""
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
              >
                Registrate Aqui
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
