import React from 'react'
import profile from '../assets/profilePic.jpg'

const ProfileBoard = () => {
  return (
    <div  className='flex flex-col justify-center items-center lg:w-3/5 bg-white h-3/4 rounded-xl space-x-5 shadow-lg'>
      <div className='w-full flex flex-col justify-center items-center p-5' >
          <img className="h-48 rounded-xl" src={profile} alt="" />

      </div> 
     
    </div>
  )
}

export default ProfileBoard