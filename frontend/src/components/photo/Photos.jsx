import React from 'react'
import SingleItem from '../singleItem/SingleItem'

import './photos.css'


const Photos = ({photos}) => {
    return (
        <div className='photosWrapper'>
            {photos.map(photo =>(
                <SingleItem
                key={photo._id} photo={photo}/>
            ))}
        </div>
    )
}
 
export default Photos
