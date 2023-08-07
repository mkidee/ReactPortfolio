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

            <div className='footerLink'>
                <a href='https://github.com/mkidee' target='_blank' rel='noopener noreferrer'>
                    <img src={githubicon} alt='github logo link' width='50' height='50' />
                </a>
            </div>

            <div className='footerLink'>
                <a href='https://www.linkedin.com/in/mckay-memmott-48a166263/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedicon} alt='linkedIn logo link' width='50' height='50' />
                </a>
            </div>

        </section>
    );
};

export { TopNav, Header, Footer };