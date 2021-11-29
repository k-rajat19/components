import React from 'react'
import './Comp.css'
import {Link} from 'react-router-dom'
import mail from './Mail.png'
import download from './Download.png'

export default function Comp() {
    return (
        <div className='comp'>
          <div>
          <span className='comp-image'><img src='' alt="" /></span>
          <span>124 W. Appl...</span>
          </div>
          <Link to='#'>Example.jpg</Link>
          <div>
          <span className='comp-image'><img src='' alt="" /></span>
          <span>John Boe</span>  
          </div>
          <div>N/A</div>
          <div>10/01/2022</div>
          <div className='comp-share'>
          <img src={mail} alt="" />
          <Link to='#'>Share</Link>
          </div> 
          <div className='comp-btn'>
          <button>E-Sign</button>
          <button>
              <img src={download} alt="" />
            Download
            </button>
          </div>  
        </div>
    )
}
