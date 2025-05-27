import { useState, useContext} from 'react'
import { arrContext } from './ArrContextProvider'

const StudentsList = () => {
     
    const {arrList,setArrList,fList,setFList} = useContext(arrContext)
    console.log(arrList);
    console.log(setArrList);

    function handleFav(student){
         if (!fList.includes(student)) {
      setFList([...fList, student]);
    }
    }
   

   
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">All Students</h2>
      {arrList.map((student, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{index+1}.{student}</span>
          <button
            onClick={() => handleFav(student)}
            className="bg-black text-white px-2 py-1 rounded"
          >
            Add to Favourite
          </button>
        </div>
      ))}
    </div>
  )
}

export default StudentsList