import {useState} from "react";
import millify from "millify";
import {useLocation, useNavigate} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const VideoCard = ({video, isRow}) => {

    const [isHover, setHover] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    const handleNavigate = () => {
        if (location.pathname.startsWith('/watch')) {
            navigate(`?v=${video?.videoId}`);
        } else {
            navigate(`watch?v=${video?.videoId}`);
        }
    };


    return (
        <div onClick={handleNavigate}
             className={`${isRow ? "row" : ""} cursor-pointer`}
             onMouseEnter={() => setHover(!isHover)}
             onMouseLeave={() => setHover(false)}
        >

            <div>
                <img
                    className="w-full h-full rounded-lg"
                    src={
                        isHover && video?.richThumbnail
                            ? video.richThumbnail[0].url
                            : video.thumbnail[0].url
                    } alt=""/>
            </div>

            <div className="flex gap-4 mt-5 ">
                <img
                    className="w-14 h-14 rounded-full cursor-pointer"
                    src={video.channelThumbnail && video.channelThumbnail[0].url}
                    alt="channel logo"
                />
                <div className="">
                    <h4 className="font-bold line-clamp-2">{video.title}</h4>
                    <p>{video.channelTitle}</p>
                    <div className="flex gap-2">
                        <p className="flex gap-1">
                            <span>{millify(video.viewCount)}</span>
                            <span> Goruntulenme</span>
                        </p>
                        |<p>{video.publishedTimeText}</p>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default VideoCard;