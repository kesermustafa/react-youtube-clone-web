import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import {TiArrowSortedDown} from "react-icons/ti";


// eslint-disable-next-line react/prop-types
const Comments = ({data}) => {

    return (
        <div>
            <h2 className="ps-2 pt-4">{data?.commentsCount}</h2>
            <input type="text"
                   className= "w-full bg-transparent outline-none mb-4 p-2 border-b"
                   placeholder="Your comments" />

            {/* eslint-disable-next-line react/prop-types */}
            {data?.data.map((item, index) => (

                <div key={index} className='flex gap-5 mt-5 px-5'>
                    <img  src={item?.authorThumbnail[0]?.url} className='rounded-full w-16 h-16' alt=""/>
                    <div className='flex flex-col gap-2'>
                        <h5 className="flex gap-4">{item?.title}
                            <span className='font-bold'>{item?.authorText}</span>
                            <span className=''>{item?.publishedTimeText}</span>
                        </h5>
                        <p>
                            {item?.textDisplay}
                        </p>
                        <div className='flex gap-4 items-center'>
                            <div className=" flex gap-2 items-center">
                                <div className='rounded-full transition duration-300  p-3 hover:bg-[#272727]'>
                                    <BiSolidLike/>
                                </div>

                                <span>{item.likesCount}</span>
                                <div className='rounded-full transition duration-300 p-3 hover:bg-[#272727]'>
                                    <BiSolidDislike/>
                                </div>
                                <button
                                    className='bg-transparent  transition duration-300 hover:bg-gray-400 px-3 py-1 rounded-full'>Yanitla
                                </button>
                            </div>
                        </div>

                        {item.replyCount > 0 && (
                            <div className='flex gap-4 items-center text-blue-500 hover:bg-[#11263D] w-fit pe-4 rounded cursor-pointer'>
                                <TiArrowSortedDown />
                                {item.replyCount} yanit
                            </div>
                        )}

                    </div>
                </div>

            ))}
        </div>
    )
}

export default Comments;