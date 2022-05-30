import React from 'react';

const Trol = ({ MDP, ID }) => {
    return (
        <div>
            <h1 className='titre_troll'>Voici un site de fishing ! On s'en sert pour pêcher les petits poissons comme vous.</h1>
            <p>Votre identifiant: {ID}</p>
            <p>Votre mot de passe: {MDP}</p>

            <p>Par la suite, la personne malveillante a accès à vos informations ainsi qu'à votre compte.</p>
            <h2 className='prévention'>Ne cliquez pas sur des liens inconnus!</h2>
            <img className='echec' src="echec.jpg" alt="Photo d'échec" />
        </div>
    );
};

export default Trol;