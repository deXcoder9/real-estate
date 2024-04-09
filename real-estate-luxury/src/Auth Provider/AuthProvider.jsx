import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)

    const handleRegistrationAuth = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLoginAuth = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, user => {
            // console.log("changed fjslkdfsaklfj, ", user)
            setUserInfo(user)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const handleSignOut = () => {
        return signOut(auth)
    }
    // const handleUpdateUserProfile = (name, photoURL) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: { name }, photoURL: { photoURL }
    //     })
    // }

    const AuthInfo = {
        userInfo,
        handleRegistrationAuth,
        handleLoginAuth,
        handleSignOut,
        // handleUpdateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;

