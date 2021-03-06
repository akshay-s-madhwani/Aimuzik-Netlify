import React from 'react'
import '../../App.css';
import {PencilSquare, Image} from 'react-bootstrap-icons';
export default function Profile(props) {
    return (
        <div>
        <div className = "profile-backdrop">
            <img src="/Aimuzik/IMG_20210305_153042.JPG" alt="Default Pic" className="profile-pic"/>
            <PencilSquare className='bi-pencil-square'/>
            <Image className="bi-image"/>
        </div>
        <h3>{props.name}</h3>
        </div>
    )
}
