import { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import * as firebaseApp from '../firebase/configFirebase'


export const GeneralAuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    onAuthStateChanged(firebaseApp.auth, (createdUser) => {
        setUser(createdUser)
    })

    const sigUpwithEmailAndPassword = async (email, password) => {
        try {
            const newUser = await createUserWithEmailAndPassword(firebaseApp.auth, email, password)
        } catch (err) {
            console.log(err.message)
        }
    }

    const logOut = async () => {
        try {
            await signOut(firebaseApp.auth)
        } catch (err) {
            console.log(err.message)
        }
    }


    const logignWithEmail = async (email, password) => {
        try {
            const newUser = await signInWithEmailAndPassword(firebaseApp.auth, email, password)
        } catch (err) {
            console.log(err.message)
        }
    }

    const data = {
        sigUpwithEmailAndPassword: sigUpwithEmailAndPassword,
        user: user,
        logOut: logOut,
        logignWithEmail: logignWithEmail
    }
    return (
        <GeneralAuthContext.Provider value={data}>
            {children}
        </GeneralAuthContext.Provider>
    )
}

export default AuthProvider