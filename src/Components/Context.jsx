import { createContext ,React, useState} from "react"

export const userContext=createContext(null);

export default function Context({children}) {
    const [Cart,setCart]=useState([])
  return (
    <userContext.Provider value={{Cart,setCart}}>{children}</userContext.Provider>
  )
}
