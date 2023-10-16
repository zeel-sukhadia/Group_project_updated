import "./SIGNUP.css";
import React from "react";
import { useState } from "react";
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignupAutho(){
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const firstName = e.target.firstName.value
        const email = e.target.email.value
        const password = e.target.password.value

        createUserWithEmailAndPassword(database,email,password).then(data=>{
        console.log(data,'authData')
        alert("successfull")
        })
        // .catch((error)=>{
        //     if (error.code === 'auth/invalid-email') {
        //         // Handle invalid email address error here
        //         console.error('Invalid email address');
        //       } else {
        //         // Handle other authentication errors
        //         console.error(error.message);
        //       }

        // })
    }

    return (
        <div className="sign-up">
        <div className="sign-up-child" />
        <b className="signup">Signup</b>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <b className="name">Name :<br></br> <input className="username" name="firstName" type="text" 
        placeholder="Enter your username" ></input></b><br></br>
      
        <b className="email">Email :<br></br><input className="mail"  name="email" 
        placeholder="Enter your email" ></input></b>

        <b className="password">Password :<br></br><input 
        placeholder="Enter password" className="passwrd" type="password" name="password" maxLength={8} ></input><br></br><br></br>

        <b className="submit"><input type="submit" className="btn" value="SUBMIT" name="submit" ></input></b></b>
      
      
        <b className="already-have-an-container">
        <span>Already have an account?</span>
        <span className="login"> Login</span>
        </b>
        </form>
        </div>
    );
}

export default SignupAutho;
