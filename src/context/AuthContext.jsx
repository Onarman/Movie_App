import React, { createContext } from 'react'
import { useState } from 'react';

export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(true)

  return (
    <AuthContextProvider value={{ currentUser}}>
        {children}
    </AuthContextProvider>
  )
}

export default AuthContextProvider