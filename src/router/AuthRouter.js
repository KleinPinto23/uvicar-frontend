import React from 'react'
import { Routes, Route } from "react-router-dom"
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
//import { RegistrarUnidadPage } from '../pages/RegistrarUnidadPage';
import { IngresarMenuPage } from '../pages/IngresarMenuPage';

import '../css/login-register.css';
 
export const AuthRouter = () => {
  return (

    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">

          <Routes>
            {/* en AppRouter tenemos /auth/* que va manejar las rutas anidadas */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/*<Route path="/nuevaMenu" element={<RegistrarUnidadPage />} />*/}
            <Route path="/nuevoMenu" element={<IngresarMenuPage />} />
            <Route path="*" element={<p>La página no existe</p>} />
          </Routes>

        </div>
      </div>
    </div>

  )
}