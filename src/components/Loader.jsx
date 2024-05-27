
import { FaRegCircleUser } from "react-icons/fa6";

const Loader = () => {

    const arr = [1,2,3,4,5,6,7,8,9]
    return arr.map((i) => (
            <div key={i} className='p-4 shadow animate-pulse md:p-6'>

                <div className='flex items-center rounded bg-gray-700 h-48 ' />
                <div className= "flex items-center mt-4 gap-3" >
                    <FaRegCircleUser className="text-5xl text-gray-400" />

                    <div>
                        <div className='h-2.5 bg-gray-700 mt-2 w-44 rounded-full'/>
                        <div className= "w-16 h-2 rounded-full bg-gray-700 my-3 "/>

                        <div className='flex gap-2'>
                            <div className="w-16 h-2 rounded-full bg-gray-700 my-3 "/>
                            <div className="w-16 h-2 rounded-full bg-gray-700 my-3 "/>
                        </div>
                    </div>
                </div>

            </div>

    ))
}

export default Loader;