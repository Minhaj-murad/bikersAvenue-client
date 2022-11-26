import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth,signOut,signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';

import { useState } from 'react';
import { useEffect } from 'react';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googlesignin = (provider) => {
   
        return signInWithPopup(auth, provider)
    }
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,googlesignin
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;