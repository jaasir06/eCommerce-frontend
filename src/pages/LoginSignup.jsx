import React, { useState } from "react";
import './css/LoginSignup.css';

const LoginSignup = () => {

    const [state, setState] = useState('Sign Up');
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login sucess",formData)
        let responseData;
        await fetch('http://localhost:4000/login',{
            method: 'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => responseData=data)
     
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    const signup = async () => {
        console.log("registered",formData)
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method: 'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => responseData=data)
     
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }

    }


    return <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
                {state === 'Sign Up' ? <input type="text" name='username' placeholder="Your Name" onChange={changeHandler} value={formData.username}/> : <></>}
                <input type="main" name="email" placeholder="Emal Address" onChange={changeHandler} value={formData.email}/>
                <input type="password" name="password" placeholder="Password" onChange={changeHandler} value={formData.password}/>
            </div>
            <button onClick={() => {state === 'Login' ? login() : signup()}}>Continue</button>
            {state === 'Login' ? <p className="loginsignup-login">Create new account ? <span onClick={() => setState('Sign up')}>Register here</span></p> : 
            <p className="loginsignup-login">Already have an account ? <span onClick={() => setState('Login')}>Login here</span></p> }
            
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, I agree to the terms of use and privacy policy.</p>
            </div>
        </div>
    </div>
}

export default LoginSignup;