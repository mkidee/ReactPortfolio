import React, { useState } from 'react';
import AboutMe from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';
import { TopNav, Header, Footer } from './NavHeadFoot';

export default function Pages() {
    console.log('works?');
    const [page, setPage] = useState('About Me');

    const pageContentHandler = (page) => setPage(page);

    const navPageMap = {
        'About Me': <AboutMe />,
        'Portfolio': <Portfolio />,
        'Resume': <Resume />,
        'Contact': <Contact />
    };

    const showPageContent = () => {
        return navPageMap[page] || <AboutMe />;
    };

    return (
        <div className="container">
            <header className='header'>
                <Header />
                <nav className='navbar'>
                    <TopNav page={page} pageContentHandler={pageContentHandler} />
                </nav>
            </header>
            <h2 className='mainPageHead'>
                {page}
            </h2>
            <main className='content'> {showPageContent()} </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </div>
    );
}; 