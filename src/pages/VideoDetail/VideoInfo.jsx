import millify from "millify";
import {useState} from "react";


// eslint-disable-next-line react/prop-types
const VideoInfo = ({video}) => {

    const [expend, setExpend] = useState(false);
    // eslint-disable-next-line react/prop-types
    const text = expend ?  video.description : video.description.slice(0,300) + "  ...daha fazla";


    return (
        <div
            onClick={() => setExpend(!expend)}
            className="mt-4 bg-[#272727] rounded cursor-pointer hover:bg-opacity-70 p-3">
            <div

                className='flex gap-4 mb-2'>
                <p className='font-bold'>{millify(video.viewCount)} Goruntulenme</p>
                <p className='font-bold'>{new Date(video.publishDate).toLocaleDateString("tr", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })}</p>
            </div>

            <p >
                {text.split('\n').map((line) => (
                    <span key={line.substring(0,8)}>
                     {line} <br/>
                    </span>
                ))}
            </p>
        </div>
    )
}

export default VideoInfo;