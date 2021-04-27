import { withRouter } from 'react-router-dom';
import './section1.css';
// import atollpreview from '../../image/atollpreview';
import atollVideo from '../../image/atollpreview.mp4';

function Section1() {

    

    return (
        <div className='section-1'>
          <video autoPlay muted loop src={atollVideo} type='video/mp4' id='fullscreen-video' />
        </div>
      

    )
}


export default withRouter(Section1);