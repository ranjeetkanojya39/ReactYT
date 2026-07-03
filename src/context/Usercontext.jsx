import React , { createContext } from 'react'


export const DataContext = createContext()

const UserContext = ({children}) => {

    const userData = {
      username: 'John Doe',
      age: 30,
      city: 'New York'
    }
 
    return (
    <div>
      
    <DataContext.Provider value={userData}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext
