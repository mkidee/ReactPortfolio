import React from 'react';
import resume2023 from './assets/resume2023.pdf';

export default function Resume() {
    return (
        <div>
            <section className='main-container resume-container'>
                <div className='resumeSpacing'>
                    <h3 className='listTitle'>
                        <strong>Front-End Skills:</strong>
                    </h3>
                    <ul className='skillist'>
                        <li>HTML / CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Responsive Pages/Applications</li>
                        <li>jQuery</li>
                    </ul>
                </div>

                <div className='resumeSpacing'>
                    <h3 className='listTitle'>
                        <strong>Front-End Skills:</strong>
                    </h3>
                    <ul className='skillist'>
                        <li>Express JS</li>
                        <li>Mongo DB</li>
                        <li>MySQL / PostgreSQL</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div className='resumeSpacing'>
                    <a href={resume2023} target='_blank' rel='noopener noreferrer' className='downloadRes'>
                        Download My Full Resume Here!
                    </a>
                </div>

            </section>
        </div>
    )
}