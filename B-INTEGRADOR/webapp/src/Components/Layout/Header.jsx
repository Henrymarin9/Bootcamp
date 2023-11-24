import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ cartItems }){
    return (
        <div>
            <header class="Header">
                <section>

                    <article>

                        <h1>3DMusic</h1>

                    </article>

                    <article>

                        <nav>
                            <ul id="links">
                                <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                                <li><NavLink to="/up-date" activeClassName="active-link">Up-Date</NavLink></li>
                                <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                                <li><NavLink to="/about-us" activeClassName="active-link">About Us</NavLink></li>
                                <li><NavLink to="/cart" activeClassName="active-link" className="cart-link"><img src="./cart.svg" alt="Carrito" /></NavLink></li>
                            </ul>
                        </nav>
                    </article>
                </section>
            </header>
        </div>
    )
}

export default Header;