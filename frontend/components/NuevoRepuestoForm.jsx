import React from 'react';
import { useDispatch } from 'react-redux';
import { createRepuesto } from '../store/repuestosActions';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const NuevoRepuestoForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('usuario', data.usuario);
    formData.append('repuesto', data.repuesto);
    formData.append('modelo', data.modelo);
    formData.append('categoria', data.categoria);
    formData.append('descripcion', data.descripcion);
    formData.append('imagen', data.imagen[0]);

    dispatch(createRepuesto(formData));
  };

  return (
    <>
      <div className="">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        for="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sitio Web
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="www.susitioweb.com.ar"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        forHtml="repuesto"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Repuesto
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          {...register('repuesto')}
                          required
                          type="text"
                          name="repuesto"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="nombre del repuesto"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        forHtml="modelo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Modelo
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          {...register('modelo')}
                          required
                          type="text"
                          name="modelo"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="modelo del repuesto"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        for="categoria"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Categoria
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          {...register('categoria')}
                          required
                          type="text"
                          name="categoria"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="categoria del repuesto"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      forHtml="descripcion"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Descripción
                    </label>
                    <div className="mt-1">
                      <textarea
                        {...register('descripcion')}
                        required
                        id="descripcion"
                        name="descripcion"
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="informacion sobre el estado del repuesto"
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Imagen del Repuesto
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Subir una imagen</span>
                            <input
                              {...register('imagen')}
                              required
                              type="file"
                              name="imagen"
                              //accept="image/jpeg"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoRepuestoForm;
