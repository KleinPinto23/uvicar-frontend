import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';
import { UvicarContext } from './uvicar/UvicarContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext( AuthContext );
    const { dispatch } = useContext( UvicarContext );

    useEffect(() => {
        if( auth.logged ){
            conectarSocket();
        }
    }, [ auth, conectarSocket ]);

    
    useEffect(() => {
        if( !auth.logged ){
            desconectarSocket();
        }
    }, [ auth, desconectarSocket ]);
    
    
    // Escuchar los cambios en los usuarios conectados
    useEffect(() => {

        socket?.on( 'lista-usuarios', (usuarios) => {
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios
            })
        })
      
    }, [ socket, dispatch ]);


    //Obtener el listado de unidades desde el Backend
    useEffect(() => {

        socket?.on( 'lista-unidades', (unidades) => {
            dispatch({
                type: types.unidadesCargadas,
                payload: unidades
            })
        })
      
    }, [ socket, dispatch ]);


    //Obtener el listado de menus desde el Backend
    useEffect(() => {

        socket?.on( 'lista-menus', (menus) => {
            dispatch({
                type: types.menusCargados,
                payload: menus
            })
        })
      
    }, [ socket, dispatch ]);
    

    useEffect(() => {
        socket?.on('mensaje-personal', (mensaje) => {
            //TODO: Dispatch de una acción que va a grabar lo mostrado en pantalla
            dispatch({
                type: types.nuevoMensaje,
                payload: mensaje
            });

            //TODO: Mover el scroll al final
            scrollToBottomAnimated( 'mensajes' );
        })      
    }, [ socket, dispatch ])
    


    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}