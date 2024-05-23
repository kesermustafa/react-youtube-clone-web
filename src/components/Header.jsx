import {Link} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import {FaBell} from "react-icons/fa";
import {IoIosVideocam} from "react-icons/io";
import {MdVideoLibrary} from "react-icons/md";

const Header = () => {
    return (

        <header className='flex justify-between items-center p-4'>
            <Link to='/' className='flex items-center gap-2'>
                <img className="w-[50px]" src="./public/youtube2.png" alt="logo"/>
                <h1 className='text-2xl font-mono max-sm:hidden'>YouTube</h1>
            </Link>

            <form className=' group flex border border-gray-400 overflow-hidden rounded-[20px]'>
                <input
                    className='bg-black rounded-l-[20px] text-white px-5 py-2 outline-none border
                    border-transparent group-hover:border group-hover:border-blue-500 focus:border-blue-500'
                    type='text'
                    placeholder='Search'/>
                <button className='px-4 text-2xl bg-zinc-800'>
                    <CiSearch/>
                </button>
            </form>
            <div className='flex gap-2 items-center '>
                <FaBell/>
                <IoIosVideocam/>
                <MdVideoLibrary/>
            </div>
        </header>
    )
}

export default Header