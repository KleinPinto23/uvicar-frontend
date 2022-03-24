import { createContext, useCallback, useContext, useState } from "react";
import React from 'react'
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { UvicarContext } from "../context/uvicar/UvicarContext";
import { types } from "../types/types";

export const AuthContext = createContext();

const initialState = {

    uid: null, //id usuario
    checking: true, //Para saber si ya está autenticado usuario previamente o no
    logged: false, //usuario logeado true, de lo contrario false
    name: null,
    email: null,

};

export const AuthProvider = ({ children }) => {
  
    //métodos
    const [ auth, setAuth ] = useState( initialState );
    const { dispatch } = useContext( UvicarContext );

    const login = async ( email, password ) => {

      const resp = await fetchSinToken( 'login', { email, password }, 'POST' );
      
      if( resp.ok ){
        localStorage.setItem( 'token', resp.token );
        console.log(resp)
        const { usuario } = resp;

        setAuth({
          uid: usuario.uid,
          checking: false,
          logged: true,
          name: usuario.nombre,
          email: usuario.email,
        });

      }

      return resp.ok;
    }
    

    const register = async ( nombre, email, password ) => {

      const resp = await fetchSinToken( 'login/new', { nombre, email, password }, 'POST' );
      console.log(resp);
      
      if( resp.ok ){
        localStorage.setItem( 'token', resp.token );
        const { usuario } = resp;

        setAuth({
          uid: usuario.uid,
          checking: false,
          logged: true,
          name: usuario.nombre,
          email: usuario.email,
        });

        return true;
      }

      return resp.msg;

    }

    const verificaToken = useCallback( async () => {

        const token = localStorage.getItem('token');

        if( !token ){
          setAuth({
            uid: null, //id usuario
            checking: false, //Para saber si ya está autenticado usuario previamente o no
            logged: false, //usuario logeado true, de lo contrario false
            name: null,
            email: null,
          })

          return false;
        }
        
        const resp = await fetchConToken('login/renew'); //No se manda nada más porque es un método GET
        
        if( resp.ok ){
            localStorage.setItem( 'token', resp.token );
            const { usuario } = resp;

            setAuth({
              uid: usuario.uid,
              checking: false,
              logged: true,
              name: usuario.nombre,
              email: usuario.email,
            });

            return true;
        } else {          
            setAuth({
              uid: null,
              checking: false,
              logged: false,
              name: null,
              email: null,
            });

            return false;
        }

    }, [] ) //Estará en un useEffect

    const logout = () => {
        localStorage.removeItem( 'token' );

        dispatch({ type: types.cerrarSesion });

        setAuth({
          checking: false,
          logged: false,
        });
    }

    const ingresarUnidad = async ( placa, marca, modelo, cliente ) => {

      const resp = await fetchSinToken( 'login/nuevaUnidad', { placa, marca, modelo, cliente }, 'POST' );
      console.log(resp);
      
      if( resp.ok ){
        //localStorage.setItem( 'token', resp.token );
        const { unidad } = resp;

        setAuth({
          placa: unidad.placa,
          marca: unidad.marca,
          modelo: unidad.modelo,
          cliente: unidad.cliente,
        });

        return true;
      }

      return resp.msg;

    }


    const ingresarMenu = async ( menu, enlace ) => {

      console.log('Ingresar Menu - Antes del fetch: ', menu, enlace);
      
      const resp = await fetchSinToken( 'login/nuevoMenu', { menu, enlace }, 'POST' );
      console.log(resp);
      
      if( resp.ok ){
        //localStorage.setItem( 'token', resp.token );
        const { optMenu } = resp;

        console.log(optMenu);

        setAuth({
          menu: optMenu.menu,
          enlace: optMenu.enlace,
        });

        return true;
      }

      return resp.msg;

    }


  
  return (
    <AuthContext.Provider value={{
        auth,
        login,
        register,
        verificaToken,
        logout,
        ingresarUnidad,
        ingresarMenu
    }}>
        { children }
    </AuthContext.Provider>
  )
}
