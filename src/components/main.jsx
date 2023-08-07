import React, { useState } from 'react';
import about from './about';
import contact from './contact';
import portfolio from './portfolio';
import resume from './resume';
import { TopNav, Header, Footer } from './NavHeadFoot';

export default function Pages() {
    const [page, setPage] = useState('About Me');

    const pageContentHandler = (page) => setPage(page);

    const navPageMap = {
        'About Me': <aboutMe />,
        'Portfolio': <portfolio />,
        'Resume': <resume />,
        'Contact': <contact />
    };

    const showPageContent = () => {
        return navPageMap[page] || <aboutMe />;
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
}