import './index.scss';
import React, { useRef, useEffect } from 'react';
import logo1 from '../../../assets/morelife.png';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

function Logo() {

    const logRef = useRef()
    const outlineRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(logRef.current,{duration:1, opacity:1})
        //.from(outlineRef.current,{DrawSVG:1, duration:20})
        
        //gsap.fromTo(solidLogoRef.current,{duration:1,delay:4, opacity:0})
},[])
    
    return (
    <div className='logo-container' ref={logRef}>
        <img ref={solidLogoRef} className="solid-logo" src={logo1} alt ='j'/>
        <svg width='559pt' height='897pt' version='1.0' viewBox='0 0 559 897' xmlns='https://www.w3.org/2000/svg'>
            <g className='svg-container'transform='translate(0 457) scale(.1 -.1)'fill='none'>
                <path ref={outlineRef} d=''/>
            </g>
        </svg>
            

            
    </div>
)
}

export default Logo