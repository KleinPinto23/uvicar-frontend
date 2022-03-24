import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { UvicarProvider } from './context/uvicar/UvicarContext';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './router/AppRouter';

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


export const UvicarApp = () => {
  return (
    <UvicarProvider>
        <AuthProvider>
            <SocketProvider>
                <AppRouter />
            </SocketProvider>
        </AuthProvider>
    </UvicarProvider>
  )
}
