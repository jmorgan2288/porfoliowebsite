import './index.scss';
import React, { useRef } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../animatedletters';
import {useState,useEffect} from'react'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker,Popup, TileLayer } from 'react-leaflet';



function Contact() {

    const [letterClass, setletterClass]=useState('text-animate')
    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_ztplfc4','template_92g74qh', form.current,'1y4MPt87qcum7NHcA')
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)},

            () => {
                alert('Message failed to send, please try again!')
            }
        )
    }




    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover')
    }, 3000)}, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                            idx={15} 
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I am greatful for your visit, If you have any questions please <br/> dont hesitate to contact me. Im looking forward to growing with you!!
                    </p>
                    <div className='contact-form' onSubmit={sendEmail}>
                        <form ref={form}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send Message'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jeremy Morgan,
                    <br/>
                    500 Chews landing rd.
                    <br/>
                    Lindenwold,NJ 08021<br/>
                    <span>morganje@merrimack.edu</span>

                </div>
                <div className='map-wrap'>
                    <MapContainer center={[39.8014, -74.4057]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[39.8014, -74.4057]}>
                            <Popup>
                                Jeremy's location is here
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}
export default Contact