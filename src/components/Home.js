import React from 'react';
import NavBar from "./NavBar";


const Home = () => {


  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className='hero'>
        <div className="home">
          <center>
            <h1>Welcome to our Job Listing App!</h1>
            <p>Find talented individuals or discover job opportunities.</p>
          </center>
        </div>
      </section>
    </>

  );
}

export default Home;