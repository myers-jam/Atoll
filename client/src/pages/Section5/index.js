import { withRouter } from 'react-router-dom';
import './section5.css';
import chest from '../../image/blender/chest.PNG'
import flower from '../../image/blender/flower.png'
import grass from '../../image/blender/grass.png'
import key from '../../image/blender/key.PNG'
import landscape from '../../image/blender/landscape.png'
import palm_tree from '../../image/blender/palm_tree.png'
import plant from '../../image/blender/plant.png'
import rock from '../../image/blender/rock.png'
import anemone from '../../image/blender/anemone.png'
import bird from '../../image/blender/bird.png'
import clam from '../../image/blender/clam.png'
import crystal from '../../image/blender/crystal.png'
import starfish from '../../image/blender/starfish.png'
import barrel from '../../image/blender/barrel.png'
import plank from '../../image/blender/plank.png'
import SwipeCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'


function Section5() {


    SwipeCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
        <div className='section-5' id='about-tag'>
            <div className='title-content-container'>
                <div className='section-5-title'>
                    <p>A</p>
                    <p id='student'> STUDENT</p>
                    <p id='bar'>PROJECT</p>
                </div>
                <div className='section-5-content'>
                    <p>We are a group of four students from WTAMU who were inspired to create a game, using custom assets modeled by each team member using Blender.</p>
                </div>
            </div>
            <div className='slider-container'>
                <div className='slider'>
                    <Swiper
                        className='swiper-class'
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}>
                        <SwiperSlide><img id='pic' src={chest}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={landscape}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={palm_tree}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={flower}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={grass}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={key}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={plant}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={rock}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={anemone}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={bird}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={clam}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={crystal}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={starfish}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={barrel}></img></SwiperSlide>
                        <SwiperSlide><img id='pic' src={plank}></img></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )

}


export default withRouter(Section5);