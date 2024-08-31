import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='container-fluid text-white d-flex justify-content-center align-items-center flex-column gradient-background hero'
            >
                <div className='glass-card align-items-center justify-content-center'>
                    <h4 style={{ fontSize: "2.5rem" }}>NBNW NEWS</h4>
                    <h5>Build With NEWSAPI</h5>
                </div>
            </div>
        </>
    );
}

export default Hero;
