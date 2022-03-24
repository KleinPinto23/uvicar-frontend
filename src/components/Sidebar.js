import React, { useContext } from 'react'

import { AuthContext } from '../auth/AuthContext';
import { UvicarContext } from '../context/uvicar/UvicarContext'

import { SidebarUvicarItem } from './SidebarUvicarItem'


export const Sidebar = () => {
    
    const { uvicarState } = useContext( UvicarContext );
    const { auth } = useContext( AuthContext );
    
    const{ uid } = auth;

    console.log( 'uvicarState: ',uvicarState )

    return (

        <div className="inbox_chat">
        {/* Sidebar inicio */}

            {
                uvicarState.menus
                    .map( (menus) => (
                    <SidebarUvicarItem
                        key={ menus.menu }
                        menu={ menus.menu }
                    />
                ))
            }

            {/* Espacio extra para scroll */}
            <div className="extra_space"></div>

        {/* Sidebar Fin */}
        </div>        

    )
}
