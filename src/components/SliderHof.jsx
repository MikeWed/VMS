import React from 'react'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"

import './Hof.scss'
import hof1 from '../assets/hof1.jpg'
import hof2 from '../assets/hof2.jpg'
import hof3 from '../assets/hof3.jpg'

register();

export default function SliderHof() {

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        // console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
        // console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            space-between= "50"
            loop= "true"

        >
                <swiper-slide>
                    <div className="hof-slide">
                        <img src={hof1} alt="" />
                        <div className="hof-slide-text">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi dolor, quo non quibusdam asperiores sit harum sapiente, corrupti amet similique minima pariatur natus commodi molestias ipsam provident aspernatur assumenda.</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="hof-slide">
                        <img src={hof2} alt="" />
                        <div className="hof-slide-text">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi dolor, quo non quibusdam asperiores sit harum sapiente, corrupti amet similique minima pariatur natus commodi molestias ipsam provident aspernatur assumenda.</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="hof-slide">
                        <img src={hof3} alt="" />
                        <div className="hof-slide-text">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi dolor, quo non quibusdam asperiores sit harum sapiente, corrupti amet similique minima pariatur natus commodi molestias ipsam provident aspernatur assumenda.</p>
                        </div>
                    </div>
                </swiper-slide>

        </swiper-container>
    )
}
