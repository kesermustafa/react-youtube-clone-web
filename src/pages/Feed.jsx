

import SideBar from "../components/SideBar.jsx";
import {VideoContext} from "../context/VideoContext.jsx";
import {useContext} from "react";


const Feed = () => {

   const {video, isLoading} = useContext(VideoContext)
    console.log(isLoading)
    return (
        <div className="flex">
            <SideBar/>
            <div>
                video
            </div>
        </div>
    )
}

export default Feed