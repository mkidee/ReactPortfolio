import React from 'react';
import githubicon from './assets/githubicon.png';
import linkedicon from './assets/linkedicon.png';

function TopNav({ page, pageContentHandler }) {
    
    const linkState = (pageName) => {
        return page === pageName ? 'tabs active' : 'tabs'
    };

    return (
        <ul className={'tabs'}>

            <li className='tab-links'>
                <a href="#about" onClick={() => pageContentHandler('About Me')} className={linkState('About Me')}>About Me</a>
            </li>

            <li className='tab-links'>
                <a href='#portfolio' onClick={() => pageContentHandler('Portfolio')} className={linkState('Portfolio')}>My Portfolio</a>
            </li>

            <li className='tab-links'>
                <a href='#resume' onClick={() => pageContentHandler('Resume')} className={linkState('Resume')}>My Resume</a>
            </li>

            <li className='tab-links'>
                <a href='#contact' onClick={() => pageContentHandler('Contact')} className={linkState('Contact')}>Contact Me</a>
            </li>

        </ul>
    );
};