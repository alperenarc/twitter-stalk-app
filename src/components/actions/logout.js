import firebase from 'firebase'

const logout = () => {
    firebase.auth().signOut()
    return {
        type: 'SIGN_OUT'
    }
}
export default logout
