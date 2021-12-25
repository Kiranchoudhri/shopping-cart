import React, {useState} from 'react'
import "./Login.css"

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='formContainer'>
            <form className='form'>
            <div className='userNameContainer'>
               <label className='userNameLabel'>User Name:</label>
               <input className='userNameInput' type= "text" value = {name} onChange={(e) => setName(e.target.value)}/>
           </div>
           <div className='passwordContainer'>
               <label className='passwordLabel'>Password:</label>
               <input className='passwordInput' type= "password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
           </div>
           <div className='buttonContainer'>
               <button className='button'>Sign In</button>
           </div>
            </form>
          
        </div>
    )
}

export default Login
