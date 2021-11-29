import React from 'react'
import './Card.css'
import downicon from './Vector (8).png'


export default function Card() {
    return (
        <div className='card'>
            <div className='card-top'>
                <span >Example.jpg</span>
                <span>Status: In Progress</span>
            </div>
            <div className='card-mid'>
                <span >
                    <span className='card-mid-image'><img src='' alt="" /></span>
                    <span>John Boe</span>
                </span>
                <span>Uploaded 10/12/2032</span>
            </div>
            <div className='card-bottom'>
                <button>
                   More
                   <img src={downicon} alt="" />
                </button>
                <button>E-Sign</button>
            </div>
        </div>
    )
}
