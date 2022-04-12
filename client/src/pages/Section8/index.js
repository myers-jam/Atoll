import { withRouter } from 'react-router-dom';
import './section8.css';
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react';
import ModalImage from 'react-modal'
import testImage from '../../image/SC4.PNG';



function Section8() {




    return (
        <div className='section-8' id='gallery-tag'>
            <div className='section-8-container'>
                <div className='box circle-container-top' id='circle'>
                    <div className='circle'>GALLERY</div>
                </div>
                <div className='box' id='game1'></div>
                <div className='box' id='game10'></div>
                <div className='box' id='game7'></div>
                <div className='box' id='game4'></div>
                <div className='box' id='game5'></div>
                <div className='box' id='game6'></div>
                <div className='box' id='game3'></div>
                <div className='box circle-container' id='circle'>
                    <div className='circle'>GALLERY</div>
                </div>
                <div className='box' id='game8'></div>
                <div className='box' id='game9'></div>
                <div className='box' id='game2'></div>
                <div className='box' id='game11'></div>
                <div className='box' id='game12'></div>
                <div className='box' id='game13'></div>
                <div className='box' id='game14'></div>



            </div>


        </div>
    )
}


export default withRouter(Section8);