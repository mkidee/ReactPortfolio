import React, { useState } from 'react';
import about from './about';
import contact from './contact';
import portfolio from './portfolio';
import resume from './resume';


export default function Pages() {
    const [page, setPage] = useState('about');

    const pageContentHandler = (page) => setPage(page);
}