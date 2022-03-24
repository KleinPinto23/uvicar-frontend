import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2';

import { AuthContext } from '../auth/AuthContext';

export const IngresarMenuPage = () => {
  
  const { ingresarMenu } = useContext( AuthContext );

  const [ form, setForm] = useState({
    menu: '',
    enlace: ''
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

    const { menu, enlace } = form;
    console.log( menu, enlace );

    //TODO: Llamar al backend
    const msg = await ingresarMenu( menu, enlace );

    if( msg !== true ){
      Swal.fire( 'Error', msg, 'error');
    }

    setForm({
        menu: '',
        enlace: '',
    });
        
  }

  const todoOk = () => {
    return (
    
      form.menu.length > 0 &&
      form.enlace.length > 0

    ) ? true : false;
  }






  return (
    <form
      onSubmit={ onSubmit }
      className="login100-form validate-form flex-sb flex-w"
    >
      <span className="login100-form-title mb-3">
        Ingresar Menú
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="menu"
          placeholder="Menú"
          value={ form.menu }
          onChange = { onChange }
        />
        <span className="focus-input100"></span>
      </div>

      
      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="enlace"
          placeholder="Enlace"
          value={ form.enlace }
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
          Crear Menú
        </button>
      </div>

    </form>

  )
}
