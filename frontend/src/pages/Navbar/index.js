import { withRouter } from 'react-router-dom';
import React, {useEffect} from 'react';
import './navbar.css';
import atollLogo from '../../image/AtollLogo.svg'



function Nav_bar() {
    

    return (

      <div className='navbar-container'>
        <div className='navbar-content'>

          <a className ='about_link navbar-element' href="#about-tag">ABOUT</a>

          <a className ='about_link navbar-element' href="#gallery-tag">GALLERY</a>

          <div className='navbar-logo navbar-element'>
              <a href="/">
                <img src={atollLogo}></img>
              </a>
          </div>

          <a className ='about_link navbar-element' href="#game14">DOWNLOAD</a>

          <a className ='about_link' href="#btn-color">LOGS</a>
            
        </div>
      </div>

    )
}


export default withRouter(Nav_bar);