import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2';

import { AuthContext } from '../auth/AuthContext';

export const RegistrarUnidadPage = () => {
  
  const { ingresarUnidad } = useContext( AuthContext );

  const [ form, setForm] = useState({
    placa: '',
    marca: '',
    modelo: '',
    cliente: ''
  });

  const onChange = ({ target }) => {
    const{ name, value } = target;
    
    setForm({
      ...form,
      [name]: value //que use el valor del name y que no cree propiedad llamada name
    });
  }

  const onSubmit = async(ev) => {
    ev.preventDefault();

    const { placa, marca, modelo, cliente } = form;
    console.log( placa, marca, modelo, cliente );

    //TODO: Llamar al backend
    const msg = await ingresarUnidad( placa, marca, modelo, cliente );

    if( msg !== true ){
      Swal.fire( 'Error', msg, 'error');
    }

    setForm({
        placa: '',
        marca: '',
        modelo: '',
        cliente: '',
    });
        
  }

  const todoOk = () => {
    return (
    
      form.placa.length > 0 &&
      form.marca.length > 0 &&
      form.modelo.length > 0 &&
      form.cliente.length > 0

    ) ? true : false;
  }






  return (
    <form
      onSubmit={ onSubmit }
      className="login100-form validate-form flex-sb flex-w"
    >
      <span className="login100-form-title mb-3">
        Ingresar Unidad
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="placa"
          placeholder="Placa"
          value={ form.placa }
          onChange = { onChange }
        />
        <span className="focus-input100"></span>
      </div>

      
      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="marca"
          placeholder="Marca"
          value={ form.marca }
          onChange = { onChange }
        />
        <span className="focus-input100"></span>
      </div>
      
      
      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={ form.modelo }
          onChange = { onChange }
        />
        <span className="focus-input100"></span>
      </div>


      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="cliente"
          placeholder="Cliente"
          value={ form.cliente }
          onChange = { onChange }
        />
        <span className="focus-input100"></span>
      </div>
      
      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Regresar a Login
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          type="submit"
          className="login100-form-btn"
          disabled={ !todoOk() }
        >
          Crear Unidad
        </button>
      </div>

    </form>

  )
}
