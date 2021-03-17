import React from 'react'

export const GifGridItem = ( props ) => {
    // console.log(props)
    return (
        <div  className='card animate__backInLeft'>
            <img src={props.imagen} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}
