import React from 'react';
import Header from './header';
import Footer from './footer';
import NeedHelp from './needhelp';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <NeedHelp />
            <Footer />
        </div>
    );
};

export default Layout;
