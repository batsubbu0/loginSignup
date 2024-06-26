import React, { useState } from 'react'
import  './LogonSignup.css'
import user from '../assets/person.png'
import mail from '../assets/email.png'
import pass from '../assets/password.png'




const LoginSignup = () => {

    const [action,setAc]= useState("SignUp");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
        </div>
      
        <div className="inputs">
            {action ==="Login"?<div></div>: <div className="input">
     
      
     <img src={user} alt="" />
          <input type="text"  placeholder='Username'/>
      </div>}
       

        

        <div className="input" >
          <img src={mail} alt="" />
            <input type="email" placeholder='Email' />
        </div>
      
      
        <div className="input">
          <img src={pass} alt="" />
            <input type="password"  placeholder='Password'/>
        </div>

        {action==="SignUp"?<div></div>: <div className="forgot">Forgot password? <span>click here</span></div>}
       

        <div className="submitcon">
            <div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{setAc('SignUp')}}>SignUp</div>
            <div className={action ==='SignUp'?"submit gray":"submit"} onClick={()=>{setAc('Login')}}>Login</div>
        </div>
      
      
    </div>
    </div>
  )
}

export default LoginSignup
