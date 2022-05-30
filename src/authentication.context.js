import { createContext, useState } from 'react';
import React from 'react';

export const AuthenticationContext = createContext({});

export const AuthenticationContextProvider = ({ children }) => {
    const [ID, setID] = useState('');
    const [MDP, setMDP] = useState('');

    return (
        <AuthenticationContext.Provider value={{
            ID: ID,
            MDP: MDP,
            signIn: (name) => setID(name),
            submit: (name) => setMDP(name),
        }}>
            {children}
        </AuthenticationContext.Provider>

    )
}