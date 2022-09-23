import React from 'react'
import { BsCaretDownFill } from 'react-icons/bs';
import profile from '../../assets/Ellipse 1.png'
const Auth = () => {
  return (
    <div className="auth">
      <div className="userprofile">
      <span className="profilepic">
         <img src={profile} alt="" />
       </span>
       <span className="profilename">
        <p className="username">John Doe Elizebth</p>
        <p className="pointuser">1000 pts</p>
       </span>
       <span>
        <BsCaretDownFill style={{
         color:'rgba(0, 0, 0, 0.5)'
        }}/>
       </span>
      </div>
     </div>
  )
}

export default Auth
