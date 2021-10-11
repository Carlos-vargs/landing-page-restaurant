import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function Layout() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    );
}

export default Layout;