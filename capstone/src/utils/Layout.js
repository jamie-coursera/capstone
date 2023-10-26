import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/footer.js';
import React from 'react';
function Layout (props) {


    return (
        <React.Fragment>

        <Header/>
        <main>{props.children}</main>
        <footer><Footer/></footer>
        </React.Fragment>
    )
}

export default Layout