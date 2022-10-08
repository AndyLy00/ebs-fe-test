import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <header className="header">
                <div className="container">
                    <div className="header_block">

                        <i className="fa-sharp fa-solid fa-bag-shopping logo"> </i>
                        <a href="/" className="header_element">Products</a>
                        <a href="/cart">
                        <i className="fa-solid fa-cart-shopping cart"> </i>
                        </a>

                    </div>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;