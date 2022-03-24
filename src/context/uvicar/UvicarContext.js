import React, { Children, createContext, useReducer } from "react";
import { uvicarReducer } from "./uvicarReducer";

export const UvicarContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, //UID de usuario al que yo quiero enviar mensajes
    usuarios: [], //Todos los usuarios de la BD
    unidades: [], //Todas las unidades de la BD
    mensajes: [], //El chat seleccionado
    menus: [], //El chat seleccionado
}

export const UvicarProvider = ({ children }) => {

    const [ uvicarState, dispatch ] = useReducer( uvicarReducer, initialState );

    

    return (
        <UvicarContext.Provider value={{
            uvicarState,
            dispatch
        }}>
            { children }
        </UvicarContext.Provider>
    )
}
