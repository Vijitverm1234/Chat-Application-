import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
function ProfileUpdate() {
    const [image,setImage]=useState(false);
  return (
   <div className="profile">
  <div className="profile-container">
    <form>
      <h3>Profile Details</h3>
      <label htmlFor="avatar" className="avatar-upload">
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="avatar" accept=".png, .jpg, .jpeg" style={{ display: 'none' }} />
          <img src={image?URL.createObjectURL(image):assets.avatar_icon} alt="Upload Icon" />
          <span>Upload Profile Image</span>
        </label>
      <input type="text" placeholder="Enter Your Name" className="profile-input" />
      <textarea placeholder="Enter Profile Bio" className="profile-textarea"></textarea>
      <button type="submit" className="profile-button">Save</button>
    </form>
    <img src={image?URL.createObjectURL(image):assets.logo_icon} className="profile-pic" alt="Profile Picture" />
  </div>
</div>

  )
}

export default ProfileUpdate
