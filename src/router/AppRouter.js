import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from '../auth/AuthContext'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
/*import { UvicarPage } from '../pages/UvicarPage'
import { AuthRouter } from './AuthRouter'*/

 
export const AppRouter = () => {

  const { auth, verificaToken} = useContext( AuthContext );

  
  useEffect(() => {    
      verificaToken(); //Cada que la app se recargue lo ejecuta una única vez
  }, [verificaToken])
  


  if( auth.checking ){
    return <h1>Espere, por favor</h1>
  }

  return (
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<UvicarPage />} />
        <PublicRoute isAuthenticated = { auth.logged } path="/auth/*" element={<AuthRouter />} />
        <Route path="*" element={<p>La página no existe.</p>} />
      </Routes>
    </BrowserRouter>*/

    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={auth.logged} />}
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={auth.logged} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}