import React from 'react'
import { useState, useContext} from 'react'
import { arrContext } from './ArrContextProvider'

const FavouriteStudents = () => {
      const { fList,setFList } = useContext(arrContext);
      
      function handleRemove(studentToRemove){
        const updatedList = fList.filter(student => student !== studentToRemove);
    setFList(updatedList);
      }

  return (
   <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Favourite Students</h2>
      {fList.length === 0 ? (
        <p>No favourite students yet.</p>
      ) : (
        <ul>
          {fList.map((student, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span>{student}</span>
              <button
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => handleRemove(student)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FavouriteStudents