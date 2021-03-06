import { auth } from '../services/firebase'

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider()
    return auth().signInWithPopup(provider)
}

export function signout() {
    return auth().signOut()
}