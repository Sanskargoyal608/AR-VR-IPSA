import React from 'react';
import Header from './Header.jsx';
import Footer from './footer.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
