import React from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import {auth, provider } from '../firebase'
import { signInWithPopup, FacebookAuthProvider, OAuthProvider} from "firebase/auth"
import {addDoc, collection} from "firebase/firestore"
import {db} from "../firebase"

export default function Login ({setIsAuth}) {
    const navigate = useNavigate();

    const navigateToSignUp = () => {
      navigate('/signup')
    }

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        setIsAuth(true)
        create_user(auth)
      })
    }
    const usersCollectionRef = collection(db, "users")
    const create_user = async (auth) => {
      await addDoc(usersCollectionRef, {"display name": auth.currentUser.displayName, "email-id" : auth.currentUser.email})
      
    }

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
          setIsAuth(true)
        })
    }

    const signInWithMicrosoft = () => {
      const provider = new OAuthProvider('microsoft.com');
      signInWithPopup(auth, provider).then((result) => {
        setIsAuth(true)
      })
    }
    return (
        <div className = "display_login">
            <div  className = "welcome_message">
        <div className = "welcome_heading">Welcome!</div>
        <div className = "login_message">
          Before you begin, please login
        </div>
      </div>

      <div className = "signin_container ">
        <div className = "signindeclare">Sign-in using</div>
        <div className = "icons">
          <div>
            <button class="btn" onClick = {signInWithGoogle}><i class="fa-brands fa-google"></i>&nbsp;  Google </button>
          </div>
          <div>
            <button class="btn"><i class="fa-brands fa-apple"></i>&nbsp;  Apple </button>
          </div>
          <div>
            <button class="btn" onClick = {signInWithMicrosoft}><i class="fa-brands fa-windows"></i>&nbsp;  Microsoft </button>
          </div>
          <div>
            <button class="btn" onClick={signInWithFacebook}><i class="fa-brands fa-facebook"></i>&nbsp;  Facebook </button>
          </div>

        </div>
        <div className = "signup">
          <div className = "signup_message">Don't have an account?</div>
          <button className = "signup_btn"  onClick = {navigateToSignUp}> Sign Up </button>
        </div>
      </div>
      </div>

    )
}