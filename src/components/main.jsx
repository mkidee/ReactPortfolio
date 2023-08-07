import React, { useState } from 'react';
import about from './about';
import contact from './contact';
import portfolio from './portfolio';
import resume from './resume';


export default function Pages() {
    const [page, setPage] = useState('about');

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