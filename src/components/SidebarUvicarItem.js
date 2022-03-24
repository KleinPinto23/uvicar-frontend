import React, { useContext } from 'react'
import { UvicarContext } from '../context/uvicar/UvicarContext';
import { fetchConToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types';

export const SidebarUvicarItem = ({ menu }) => {

    /*console.log('Menu:', menu);

    const { menuState, dispatch } = useContext( UvicarContext );
    const { menuActivo } = menuState;
    
    const onClick = async() => {

        dispatch({
            type: types.activarMenu,
            payload: menu.uid
        })

        // Cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${ usuario.uid }`);        
        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes
        })

    }*/

    return (    
            
            <div
                className='chat_list'
            >

                <div className="chat_people">
                    <div className="chat_img"> 
                        <img src="https://e7.pngegg.com/pngimages/119/559/png-clipart-computer-icons-option-symbol-button-option-button.png" alt="sunil" />
                    </div>
                    <div className="chat_ib">
                        
                        <h5>{ menu }</h5>
                        <span className="text-success">{ menu.enlace }</span>
                        
                    </div>
                </div>

            {/* conversación activa Fin */}
            </div>            

    )
}
