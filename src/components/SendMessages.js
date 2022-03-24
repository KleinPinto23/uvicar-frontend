import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { UvicarContext } from '../context/uvicar/UvicarContext';
import { SocketContext } from '../context/SocketContext';

export const SendMessages = () => {

    const [ mensaje, setMensaje ] = useState('');
    
    const { socket } = useContext( SocketContext );
    const { auth } = useContext( AuthContext );
    const { chatState } = useContext( UvicarContext );

    const onChange = ({ target }) => {
        setMensaje( target.value );
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        if( mensaje.length === 0 ){ return; }
        setMensaje('');

        //TODO: Emitir evento de sockets para enviar el mensaje
        //{
            //de: //UID de usuario envindo mensaje
            //para: //UID de usuario que recibe
          //  mensaje: //Mensaje
        //}
        socket.emit( 'mensaje-personal', {
            de: auth.uid,
            para: chatState.chatActivo,
            mensaje
        })

        //TODO: Hacer el dispatch del mensaje...
    }

    return (
        
        <form onSubmit={ onSubmit }>
            <div className="type_msg row">
            {/* Enviar mensaje Inicio */}
            
                <div className="input_msg_write col-sm-9">
                    <input
                        type="text"
                        className="write_msg"
                        placeholder="Mensaje..."
                        value={ mensaje }
                        onChange={ onChange }
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            
            {/* Enviar mensaje Fin */}
            </div>
        </form>

    )
}
