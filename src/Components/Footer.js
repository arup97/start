import React from 'react';
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

    const validateselect = () => {
        return navigate('/Anglais');

    }




    return (
        <div>
            <div className='link_1'>
                <a href="https://about.facebook.com/meta">Meta</a>
                <a href="https://about.instagram.com/">A propos</a>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Fabout.instagram.com%2Fblog%2F&e=ATNos1C8nNotnsERgTxNWh16X5zqMD9NIWQGFdOACNVjVraD4ACA6Cjc0gjHNIYx0bFkdU-MlVmH0ZTV8x6FEsAnYDTVEbQ4&s=1">Blog</a>
                <a href="https://about.instagram.com/about-us/careers">Emplois</a>
                <a href="https://help.instagram.com/">Aide</a>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0">Confidentialité</a>
                <a href="https://help.instagram.com/581066165581870">Conditions</a>
                <a href="https://www.instagram.com/directory/profiles/">Compte principaux</a>
                <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
                <a href="https://www.instagram.com/explore/locations/">Lieux</a>
                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                <a href="https://www.facebook.com/help/instagram/261704639352628">Importation des contacts et non-utilisateurs</a>
            </div>
            <br />
            <div className='link_2'>
                <a href="https://www.instagram.com/topics/dance-and-performance/">Danse</a>
                <a href="https://www.instagram.com/topics/food-and-drink/">Alimetation et boissons</a>
                <a href="https://www.instagram.com/topics/home-and-garden/">Maison et jardin</a>
                <a href="https://www.instagram.com/topics/music/">Musique</a>
                <a href="https://www.instagram.com/topics/visual-arts/">Arts visuels</a>
                <br />
                <div className='link_3'>
                    <select onChange={() => {
                        validateselect();
                    }}>
                        <option value="Afrikaans">Afrikaans</option>
                        <option value="Cestina">Cestina</option>
                        <option value="Dansk">Dansk</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="English">English</option>
                        <option value="English (UK)">English (UK)</option>
                        <option value="Suomi">Suomi</option>
                        <option value="Français">Français</option>
                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                        <option value="Italiano">Italiano</option>
                        <option value="Bahasa Melayu">Bahasa Melayu</option>
                        <option value="Norsk">Norsk</option>
                        <option value="Nederlands">Nederlands</option>
                        <option value="Polski">Polski</option>
                        <option value="Svenska">Svenska</option>
                        <option value="Filipino">Filipino</option>
                        <option value="Hrvatski">Hrvatski</option>
                    </select>

                    <p>&copy; 2022 Instagram par Meta</p>
                </div>


            </div>
        </div>
    );

};

export default Footer;

