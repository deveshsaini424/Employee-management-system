import React, { createContext, useEffect, useState } from 'react'
import { getLoacalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
 

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
    const {employees} = getLoacalStorage()
    setUserData(employees)
     
    }, [])
    

    
  return (
    <div>
    <AuthContext.Provider value={[userData, setUserData]} >
        {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
