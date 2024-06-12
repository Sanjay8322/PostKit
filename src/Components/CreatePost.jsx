import React from 'react'

const CreatePost = () => {
  return (
    <div className='flex justify-center items-center lg:w-3/5 bg-white h-3/4 rounded-xl space-x-5 shadow-lg'>
              <textarea className=' focus bg-[#f6f5fd] w-1/2 h-3/5 p-5 rounded-xl focus:outline-none'  placeholder='Type your content here.'></textarea>
              <div className='bg-[#eafaf7] w-1/4 h-3/5 flex lg:flex-col justify-center items-center rounded-xl space-y-5'>
                  <button className='py-3 px-4 bg-[#4ae3c5] text-white tracking-wide text-l rounded-xl hover:bg-[#4a55ff] w-24'>Enhance</button>
                  <button className='py-3 px-4 bg-[#4ae3c5] text-white tracking-wide text-l rounded-xl hover:bg-[#4a55ff] w-24'>Correct</button>
                  <button className='py-3 px-4 bg-[#4ae3c5] text-white tracking-wide text-l rounded-xl hover:bg-[#4a55ff] w-24'>Post</button>
                  <div>
                    <input type='checkbox'></input>
                  </div>
              </div>
    </div>
  )
}

export default CreatePost