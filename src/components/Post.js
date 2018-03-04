import React, { Component } from 'react'

const Post = props => {
    return (
        <div className="post">
            <div className="post__image">
                <img src={props.img}/>
            </div>
            <div className="post__info">
                <h2 className="post__title">{props.title}</h2>
                <p className="post__description">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post