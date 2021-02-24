import React from 'react';
import '../../App.css';
import Principal from './Principal';
import Cards from './Cards'
import About from './About'
import Footer from './Footer'

const Home = () => {
    return(
        <div>
            <Principal />
            <Cards />
            <About />
            <Footer />
        </div>
    )
}

export default Home;