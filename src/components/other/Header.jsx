import React from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  
  // Get logged in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  
  // Determine display name
  let displayName = 'Admin'
  if (loggedInUser?.data?.firstName) {
    displayName = loggedInUser.data.firstName
  }
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> 
        <span className='text-3xl font-semibold'>{displayName} 👋</span> 
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header