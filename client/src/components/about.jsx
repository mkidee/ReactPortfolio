import React from 'react';
import headshot from './assets/headshot.JPG';

export default function AboutMe() {
    return (
        <div className='aboutMe'>
            <section className='main-container about-container'>
                <div className='portrait'>
                    <img src={headshot} alt='an image of myself' className='bigPic'/>
                </div>
                <p className='aboutPara'>
                    My Name is Mckay Memmott and I am a full-stack developer out of the rocky state of Utah. I am a recent graduate out of
                    the full-stack development program run by the University of Utah. I love to stay fit at the gym, travel the world, go to 
                    a live music event/concert and of course, code! I hope to work with you in the future and be apart of helping you accomplish
                    your vision in whatever aspect that may be. 
                </p>
            </section>
        </div>
    );
};