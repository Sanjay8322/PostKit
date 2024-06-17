import { Link } from 'react-router-dom'
import heroImg from '../assets/heroImg.png'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center ">
      <div className='lg:w-2/5 md:w-2/4 flex'>
          <img className='w-full' src={heroImg} alt="" />
      </div>
      <div className='space-y-5 lg:w-2/5 md:w-2/5 flex flex-col'>
          <h1 className="text-xl lg:text-4xl md:text-3xl tracking-wide font-semibold text-neutral-700">Transform your ideas<br/>
          into text posts with <span className="text-[#4a55ff]">Post</span><span className="text-[#4ae3c5]">Kit</span></h1>

          <p className='text-md lg:text-xl md:text-l tracking-wide'>Simply type your content, select a theme, and download your creation.</p>
          <div>
              <Link to='/dashboard' ><button className='bg-[#4a55ff] py-2 px-3 text-white rounded-xl tracking-wider'>Get Started</button></Link>
          </div>
      </div>  
  </div>
    </div>
   
  )
}

export default Hero



//Simply type your content, select a theme, and download your creation."