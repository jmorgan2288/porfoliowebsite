import "./index.scss";
import React from 'react';
import logo1 from '../../assets/logo1.png'
import { Link } from'react-router-dom';

function Home() {
    return (
    <div className='container home-page'>
        <h1>hi, <br/> I'm
        <img src={logo1} alt='developer'/>
        ForeverSimple
        <b />
        web developer
        </h1>
        <h2>Frontend Developer / JavaScript Developer</h2>
        <Link to='/contact'className='flat-button'>Contact Me</Link>
    </div>
    )
}

export default Home