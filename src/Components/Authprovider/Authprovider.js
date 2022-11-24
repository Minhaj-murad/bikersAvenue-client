import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth,signOut,signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';

import { useState } from 'react';
import { useEffect } from 'react';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
   


    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
       
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googlesignin = (provider) => {
   
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
           
            
            setUser(currentUser);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        createUser, 
        login,
        logOut,
        googlesignin,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;