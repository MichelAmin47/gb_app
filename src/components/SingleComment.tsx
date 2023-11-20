import React from "react";
import './SingleComment.css'

const SingleComment = (props) => {
    return (
        <div className='comment'>
            <div className='avatar'>
                <img src={props.img} className='podcast-image' alt="profile picture"/>
            </div>
            <div className='content'>
                <a href="/" className='author'>
                    {props.date}
                </a>
                <div className='metadata'>
                        <span className='date'>
                            {props.title}
                        </span>
                </div>
                <a href={props.external_url_spotify}>
                    <div className='text'>
                        {props.description}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SingleComment;