import { createContext, useState } from "react"
const arrContext=createContext()

const ArrContextProvider = (data) => {
    console.log(data);
    
    const[arrList,setArrList] = useState(["Ram","Mohan","Raj","Kumar","Ramya"])
    const[fList,setFList] = useState([])
  return (
   <arrContext.Provider value={{arrList,setArrList,fList,setFList}}>
    {data.children}

   </arrContext.Provider>
  )
}

export default ArrContextProvider
export {arrContext}