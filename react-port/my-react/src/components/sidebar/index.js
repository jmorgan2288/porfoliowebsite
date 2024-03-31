import React from 'react'
import './index.scss';
import { Link, NavLink } from'react-router-dom';
import Logo from '../../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Sidebar() {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      <nav>
        <NavLink exact='true' activeClassName='active' to='/'>
          <FontAwesomeIcon icon={faHome} color ='4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeClassName='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color ='4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeClassName='active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color ='4d4d4e' />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='linkedin' href='https://www.linkedin.com/in/jeremy-morgan-4342ba291/'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target='_blank' rel='github' href='https://github.com/jmorgan2288'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar