import React from 'react';
import '../../App.css';
import Principal from './Principal';
import Cards from './Cards'
import About from './About'

const Home = () => {
    return(
        <div>
            <Principal />
            <Cards />
            <About />
        </div>
    )
}

export default Home;