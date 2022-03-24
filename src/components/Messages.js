import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { UvicarContext } from '../context/uvicar/UvicarContext'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { SendMessages } from './SendMessages'

export const Messages = () => {
  
  const { chatState } = useContext( UvicarContext );
  const { auth } = useContext( AuthContext );
  
  return (
        
    <div className="mesgs">
    {/* Uvicar inicio */}

        {/* Historia inicio */}
        <div
          id="mensajes"
          className="msg_history"
        >

        {
            chatState.mensajes.map( msg => (
                ( msg.para === auth.uid )
                    ? <IncomingMessage key={ msg._id } msg={ msg } />
                    : <OutgoingMessage key={ msg._id } msg={ msg } />
            ))
        }

        </div>
        {/* Historia Fin */}

       <SendMessages/>

    {/* Uvicar Fin */}
    </div>
            

  )
}
