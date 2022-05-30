import React from 'react';
import { AuthenticationContext } from '../authentication.context';
import { useContext } from 'react';
import Trol from '../Components/Trol';

const Troll = ({ MDP, ID }) => {
    const authenticationContext = useContext(AuthenticationContext);
    return (
        <div>
            <Trol
                MDP={authenticationContext.MDP}
                ID={authenticationContext.ID} />
        </div>
    );
};

export default Troll;