import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/logo"

const About = () => {
    return(
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br/>
            <p>une application React qui affiche les drapeaux de 250 pays du monde et au survol, on a le nom du pays, sa capitale et le nombre d'habitant
            </p>
        </div>
    );
};

export default About;