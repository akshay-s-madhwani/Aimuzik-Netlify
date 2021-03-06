import React  from 'react'
import VideoCard from './VideoCard';
import '../../../App.css';
import {BiFullscreen} from 'react-icons/bi'

export default function VideoComponent(props) {

    return (
        <div className="video-display">
            <h2>Hottest Musicals</h2>
            <div className="video-display-inner-wrap">
                <div className="display-showcase">
                    <iframe src={props.src} title="MainDisplay" onFocus={()=>props.setActive(false)} ></iframe>
                    <BiFullscreen className = 'video-display-icon' onClick = {(e)=>{props.show();
                 props.setActive(false);   }}/>
                </div>
                <div className="display-vertical-slide-wrap">
                    <div className="display-vertical-slide">
                {props.srcArray.map((src)=>{
                    
                    return(
                    <VideoCard onClick={(e)=>props.update(e)} dataSrc={src.link}
                 img = {src.img}/>
                    )
                })}
                    </div>
                </div>
            </div>
        </div>
    )
}
