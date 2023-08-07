import React from 'react';
import githubicon from './assets/githubicon.png';
import linkedicon from './assets/linkedicon.png';

function TopNav({ page, pageContentHandler }) {
    
    const linkState = (pageName) => {
        return page === pageName ? 'tabs active' : 'tabs'
    };

    return (
        <ul className={'tabs'}>

            <li className='tabLinks'>
                <a href="#about" onClick={() => pageContentHandler('About Me')} className={linkState('About Me')}>About Me</a>
            </li>

            <li className='tabLinks'>
                <a href='#portfolio' onClick={() => pageContentHandler('Portfolio')} className={linkState('Portfolio')}>My Portfolio</a>
            </li>

            <li className='tabLinks'>
                <a href='#resume' onClick={() => pageContentHandler('Resume')} className={linkState('Resume')}>My Resume</a>
            </li>

            <li className='tabLinks'>
                <a href='#contact' onClick={() => pageContentHandler('Contact')} className={linkState('Contact')}>Contact Me</a>
            </li>

        </ul>
    );
};

function Header() {
    return (
        <h1>Mckay Memmott</h1>
    );
};

function Footer() {
    return (
        <section className='footerSpace'>

            <div>
                <a href='https://github.com/mkidee' target='_blank' rel='noopener noreferrer'>
                    <img src={githubicon} className='footerLink' alt='github logo link' />
                </a>
            </div>

            <div>
                <a href='https://www.linkedin.com/in/mckay-memmott-48a166263/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedicon}  className='footerLink' alt='linkedIn logo link' />
                </a>
            </div>

        </section>
    );
};

export { TopNav, Header, Footer };