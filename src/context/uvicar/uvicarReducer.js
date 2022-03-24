import { types } from "../../types/types";


export const uvicarReducer = ( state, action ) => {

    switch ( action.type ) {

        case types.cerrarSesion:
            return {
                uid: '',
                chatActivo: null,
                usuarios: [],
                mensajes: [],
                unidades: [],
                menus: []
            }

        case types.usuariosCargados:
            return{
                ...state,
                usuarios: [ ...action.payload ]
            }

        case types.unidadesCargadas:
            return{
                ...state,
                unidades: [ ...action.payload ]
            }

        case types.menusCargados:
            return{
                ...state,
                menus: [ ...action.payload ]
            }
        
        case types.activarMenu:
            if( state.menuActivo === action.payload ) return state; //Si es el mismo chat no purga los mensajes

            return{
                ...state,
                menuActivo: action.payload,
                //mensajes: []
            }


        case types.nuevoMensaje:
            if( state.chatActivo === action.payload.de ||
                state.chatActivo === action.payload.para
            ){ //Si el chat activo es de la persona que envía
                return {
                    ...state,
                    mensajes: [ ...state.mensajes, action.payload ] //Añadimos el nuevo mensaje
                }
            }
            else{
                return state;
            }


        case types.cargarMensajes:
            return{
                ...state,
                mensajes: [ ...action.payload ]
            }

            
        default:
            return state;
    }

}