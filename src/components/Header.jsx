import {Link, useNavigate} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import {FaBell} from "react-icons/fa";
import {IoIosVideocam} from "react-icons/io";
import {MdVideoLibrary} from "react-icons/md";

const Header = () => {

    const navigate = useNavigate();
    const handelSubmit = (e) =>{
        e.preventDefault();

        const text = e.target[0].value.trim();
        if (text.trim() === ""){
            return;
        }

        navigate(`/results?search_query=${text}`)
    }

    return (

        <header className='flex justify-between items-center p-4'>
            <Link to='/' className='flex items-center gap-2'>
                <img className="w-[50px]" src="./public/youtube2.png" alt="logo"/>
                <h1 className='text-2xl font-mono max-sm:hidden'>YouTube</h1>
            </Link>

            <form onSubmit={handelSubmit} className=' group flex border border-gray-400 overflow-hidden rounded-[20px]'>
                <input
                    className='bg-black rounded-l-[20px] text-white px-5 py-2 outline-none border
                    border-transparent group-hover:border group-hover:border-blue-500 focus:border-blue-500'
                    type='text'
                    placeholder='Search'/>
                <button className='px-4 text-2xl bg-zinc-800'>
                    <CiSearch/>
                </button>
            </form>
            <div className='flex gap-3 text-xl cursor-pointer items-center '>
                <FaBell className='hover:text-gray-400 transition duration-300'/>
                <IoIosVideocam className='hover:text-gray-400 transition duration-300'/>
                <MdVideoLibrary className='hover:text-gray-400 transition duration-300'/>
            </div>
        </header>
    )
}

export default Header