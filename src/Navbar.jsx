import React from 'react'

const Navbar = () => {
    return (
        <>
          <nav>
            <div className="logo">
                <span className="fa-regular fa-sun fa-5x"></span>
                <h1>Travel</h1>
            </div>
            <ul className="navbar"> 
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Tours</li></a>
                <a href="#"><li>Explore</li></a>
                <a href="#"><li>About Us</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
            <span className="search fa-solid fa-magnifying-glass fa-2xl"></span>
            <ul className="socials">
                <a href="#"><li><div className="border"><i className="fa-brands fa-facebook fa-2xl"></i></div></li></a>
                <a href="#"><li><div className="border"><i className="fa-brands fa-instagram fa-2xl"></i></div></li></a>
                <a href="#"><li><div className="border"><i className="fa-brands fa-twitter fa-2xl"></i></div></li></a>
                <a href="#"><li><div className="border"><i className="fa-brands fa-linkedin-in fa-2xl"></i></div></li></a>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;