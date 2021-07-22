import React from 'react'
import images from '../img/bike.jpg';

function Home() {

    return(
        <div className="home" style={{ backgroundImage: `url(${images})`}}>
            <h1>Home</h1>
            <img src={images} />
        </div>
    );
}

export default Home;