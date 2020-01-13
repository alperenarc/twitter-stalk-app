import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useDispatch } from 'react-redux'
import login from '../actions/login'


firebase.initializeApp({
    apiKey: "*",
    authDomain: "*"
})

function Login() {
    const dispatch = useDispatch()
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(login())
        }
        console.log("user", user)
    })
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    return (
        <div>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
}

export default Login