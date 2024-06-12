import logo from '../assets/postkitLogo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center p-5 sm:justify-center md:justify-center lg:justify-between">
        <div className='w-48'>
            <img src={logo} alt=""/>
        </div>
        <div className='hidden lg:flex'>
            <ul className='flex space-x-10 tracking-wide font-thin justify-center items-center text-l'>
                <li className='hover:text-[#4a55ff]'>Home</li>
                <li className='hover:text-[#4a55ff]'>How PostKit works?</li>
                <li className='hover:text-[#4a55ff]'><button className='bg-[#4a55ff] py-2 px-3 text-white rounded-md'>Login</button></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar