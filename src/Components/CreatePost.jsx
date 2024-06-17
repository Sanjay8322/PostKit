import React, { useState, useEffect, useReducer } from 'react'
import { fetchGPT4Response} from '../Services/GptCall'

const CreatePost = () => {
  const [prompt, setPrompt]=useState(()=>{
    const storedPromtp = sessionStorage.getItem('prompt')
    return storedPromtp? storedPromtp: ' ';
  })

  const [response, setResponse]= useState(()=>{
    const storedRes = sessionStorage.getItem('response')
    return storedRes? storedRes : ' '
  })
  const [showPost, setShowPost]=useState(()=>{
    return sessionStorage.getItem('show') == 'true'? true: false
  })
  
  const handleCorrect = async(e) =>{
    try{
      let input = `"${prompt}" correct this`
      const res = await fetchGPT4Response(input)
      setResponse(res)
      setShowPost(true)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    sessionStorage.setItem('prompt', prompt.toString());
  }, [prompt]);

  useEffect(()=>{
    sessionStorage.setItem('response',response.toString())
  })

  useEffect(()=>{
    sessionStorage.setItem('show',showPost.toString())
  },[showPost])


  const handleEnhance = async(e)=>{
    try{
       let input = `"${prompt}"  make this better`
      const res = await fetchGPT4Response(input)
      setResponse(res)
      setShowPost(true)
    }
    catch(err){
      console.log(err)
    } 
  }

  return (
    <div className='flex justify-center items-center lg:w-3/5 bg-white h-3/4 rounded-xl space-x-5 shadow-lg'>
              {!showPost && <textarea className=' focus bg-[#f6f5fd] w-1/2 h-3/5 p-5 rounded-xl focus:outline-none'  placeholder='Type your content here.' value={prompt} onChange={(e)=>setPrompt(e.target.value)}></textarea>}
              {showPost && <textarea className=' focus bg-[#f6f5fd] w-1/2 h-3/5 p-5 rounded-xl focus:outline-none'  placeholder='Type your content here.'disabled value={response} ></textarea>}
              <div className='bg-[#eafaf7] w-1/4 h-3/5 flex lg:flex-col justify-center items-center rounded-xl space-y-5'>
                  {showPost && <button className='py-3 px-4 bg-[#4ae3c5] text-white tracking-wide text-l rounded-xl hover:bg-[#4a55ff] w-24' onClick={()=>setShowPost(false)} >Edit</button>}
                  <button className='py-3 px-4 bg-[#4ae3c5] text-white tracking-wide text-l rounded-xl hover:bg-[#4a55ff] w-24' onClick={handleEnhance}>Enhance</button>
                  <button className='py-3 px-4 bg-[#4ae3c5] text-white tracking-wide text-l rounded-xl hover:bg-[#4a55ff] w-24' onClick={handleCorrect} >Correct</button>
                  <button className='py-3 px-4 bg-[#4ae3c5] text-white tracking-wide text-l rounded-xl hover:bg-[#4a55ff] w-24' >Post</button>
              </div>
    </div>
  )
}

export default CreatePost