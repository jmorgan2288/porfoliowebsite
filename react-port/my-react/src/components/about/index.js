import './index.scss';
import Animatedletter from '../animatedletters'
import React from 'react'
import {useState,useEffect} from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngular, faHtml5, faCss3, faReact, faGitAlt,faJsSquare } from '@fortawesome/free-brands-svg-icons';
import {Loader} from 'react-loaders';


function About() {
    const [letterClass, setletterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover')
    }, 3000)}, [])

    return (
    <>
        <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <Animatedletter
                letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                />
            </h1>
            <p>
                I'm a Full Stack Developer with a passion for building web applications.
                I'm currently looking for opportunities to expand my skills and experience.
                I'm always looking for opportunities to learn and grow.
            </p>
            <p>
                I'm confident, overjoyed, and consistently working on improving my skills day by day. It's quite simple I am ready to continue this journey I have started.
            </p>
            <p>
                My passion is in the software development. I am thankful to have a family who supports my journey because my success brings success to my loved ones.
            </p>
        </div>
        
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4'/>
                </div>
            </div>

        </div>
        </div>
    <Loader type='pacman'/>
    </>
)
}

export default About