import { withRouter } from 'react-router-dom';
import './section3.css';
import SC1 from '../../image/SC1.PNG'
import SC2 from '../../image/SC2.PNG'
import SC3 from '../../image/SC3.PNG'



function section3() {

    

    return (
        <div className='section-3'>
            <div className='pictures'>
                <img className ='zoom1' src = {SC1}></img>
                <img className ='zoom1' src = {SC2} id='middle-img'></img>
                <img className ='zoom1' src = {SC3}></img>
            </div>
            <p className ='gallery_button_text'>VIEW THE FULL GALLERY</p>
            <a className ='gallery_button'type='button' href='#gallery-tag'>HERE</a>
        </div>
      

    )
}


export default withRouter(section3);