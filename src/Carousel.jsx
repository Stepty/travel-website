import React from 'react'
import nature from './nature.jpeg'
import beach from './beach.webp'
import hotel from './hotel.jpeg'

const Carousel = () => {
    return (
        <>
        <div className="carousel">
            <div className="dot-background"></div>
            <ul>
                <li>
                    <img src={beach} alt="Beach" />
                    <span>Beach</span>
                </li>
                <li>
                    <img src={nature} alt="Nature" />
                    <span>Nature</span>
                </li>
                <li>
                    <img src={hotel} alt="Hotel" />
                    <span>Hotel</span>
                </li>
            </ul>
            <button key="1" className="carousel-button prev"> {"<"} </button>
            <button key ="2" className="carousel-button next"> {">"} </button>
        </div>
        </>
    )
}
export default Carousel;