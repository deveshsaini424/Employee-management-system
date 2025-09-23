import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
            <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
            <h4 className='w-1/5 text-lg font-medium'>Active task</h4>
            <h4 className='w-1/5 text-lg font-medium'>Completed task</h4>
            <h4 className='w-1/5 text-lg font-medium'>Failed task</h4>
        </div>
         <div className=''>
                 {userData.map(function(elem, idx){
            return   <div key={idx} className='bg-slate-800 border-2 border-slate-600 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium'style={{color: '#dd6b20'}}>{elem.taskCount.newTask}</h3>
            <h4 className='w-1/5 text-lg font-medium'style={{color: '#00D100'}}>{elem.taskCount.active}</h4>
            <h4 className='w-1/5 text-lg font-medium'style={{color: '#1E88E5'}}>{elem.taskCount.completed}</h4>
            <h4 className='w-1/5 text-lg font-medium'style={{color: '#E53935'}}>{elem.taskCount.failed}</h4>
        </div>
        })}
         </div>
  
      
    </div>
  )
}

export default AllTask
