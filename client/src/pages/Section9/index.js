import { withRouter } from 'react-router-dom';
import './section9.css';

function Section9() {



    return (
        <div className='section-9'>
            <div className='section-9-content'>
                <h1 id='download-title'>PLAY ATOLL</h1>
                <div className='center-btn'>
                    <div className='download-btn'>
                        <a href='https://kysokyso.itch.io/atoll/download/WEdIrYAfUYAD3A6cC5bvIv_bUzC6T5PhH2gtF_6f' target="_blank" rel='noreferrer'><span id='btn-color'>DOWNLOAD</span></a>
                    </div>
                </div>

            </div>
        </div>


    )
}


export default withRouter(Section9);