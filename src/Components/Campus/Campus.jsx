import React from 'react'
import './Campus.css'
import photo_1 from '../../assets/gallery-1.png'
import photo_2 from '../../assets/gallery-2.png'
import photo_3 from '../../assets/gallery-3.png'
import photo_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
    return (
        <div className='campus'>
            <div className='gallery'>
                    <img src={photo_1} alt="" />
                    <img src={photo_2} alt="" />
                    <img src={photo_3} alt="" />
                    <img src={photo_4} alt="" />

            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>

        </div>
    )
}

export default Campus