import React, { useContext } from 'react';
import { UvicarSelect } from '../components/UvicarSelect';
import { InboxPeople } from '../components/InboxPeople';
/*import { Messages } from '../components/Messages';
import { UvicarContext } from '../context/uvicar/UvicarContext';*/

import '../css/uvicar.css';

export const UvicarPage = () => {

  //const { chatState } = useContext( UvicarContext );

  return (

    <div className="messaging">
        <div className="inbox_msg">

            <InboxPeople />
            <UvicarSelect/>

        </div>


    </div>

  )
}
