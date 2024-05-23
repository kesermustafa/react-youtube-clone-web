import {categories} from "../constants/index.jsx";
import {Link} from "react-router-dom";


 const SideBar = () => {
    return (
        <div  className='flex flex-col p-1 md:p-4'>
            {
                categories?.map((item, i) => (
                    <Link key={i} >
                        <div className='flex gap-2 py-4 px-2 md:px-3 items-center md:text-lg cursor-pointer hover:bg-[#2d2d2d] rounded-md'>
                            <span className='max-md:text-2xl'>{item.icon}</span>
                            <span className='max-md:hidden line-clamp-1'>{item.name}</span>
                        </div>

                        {item.divider && <hr/>}

                    </Link>
                ))
            }
        </div>
    );
};

 export default SideBar;