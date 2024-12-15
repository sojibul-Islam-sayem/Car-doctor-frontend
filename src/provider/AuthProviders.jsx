import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    console.log(googleProvider);
    

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = async() => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google Sign-In Success:", result.user);
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            console.error("Error Code:", error.code);
            console.error("Error Message:", error.message);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current-user', currentUser);
            setLoading(false)
        });
        return unsubscribe;
    }, [])

    const authInfo = {
        user, loading, createUser, signIn, signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;