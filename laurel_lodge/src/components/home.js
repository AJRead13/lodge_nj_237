import React from 'react';
import Footer from './footer';
import Header from './header';
import Nav from './nav';

export default function(props) {
    return (<>
            <Header>
                <Nav/>
            </Header>
            <Footer/>
        </>)
}