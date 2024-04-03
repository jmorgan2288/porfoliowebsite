import "./index.scss";
import React from 'react';
import logo1 from '../../assets/letter-j.png'
import { Link } from'react-router-dom';
import AnimatedLetters from '../../components/animatedletters'
import { useState } from 'react';
import { useEffect } from'react';
import Logo from './logo'
import Loader from "react-loaders";

function Home() {

    const [LetterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'r', 'e','m','y',' ']
    const jobArray = ['S','o','f','t','w','a','r','e',' ', 'd','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
    }, 4000)}, [])

    return (
        <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={LetterClass}>H</span>
            <span className={`${LetterClass} _12`}>i,</span>
            <br/>   
            <span className={`${LetterClass} _13`}>I</span>
            <span className={`${LetterClass} _14`}>'m</span>
            <img src={logo1} alt='developer'/>
            <AnimatedLetters letterClass={LetterClass} strArray={nameArray} idx={15}/>
            <b />
            <AnimatedLetters letterClass={LetterClass} strArray={jobArray} idx={22}/>
            </h1>
            <h2>Full Stack Developer</h2>
            <Link to='/contact'className='flat-button'>Contact Me</Link>
        </div>
        <Logo/>
    </div>
    <Loader type='pacman'/>
    </>)
}

export default Home