import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
import { logout } from '../../config/firebase'
function RightSidebar() {
    return (
        <div className='rs'>
            <div className="rs-profile">
                <img src={assets.vv} alt="" />
                <h3>Vijit Verma <img src={assets.green_dot} className='dot'alt="" /> </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quibusdam.</p>
                <button className='rs-button' onClick={()=>logout()}>LogOut</button>
            </div>
            <hr />
            <div className='rs-media'>
                <p>Media</p>
                <div>
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                </div>
            </div>
          
        </div>
    )
}

export default RightSidebar
