import React from 'react'
import logo from '../img/header-logo.png'
import {NavLink} from 'react-router-dom'

export default function MainHeader() {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <NavLink to = '/' className="navbar-brand">
                            <img src= {logo} alt="Bosa Noga" />
                        </NavLink>

                        <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active" key = '1'>
                                    <NavLink to = '/' className="nav-link">Главная</NavLink>
                                </li>
                                <li className="nav-item"  key = '2'>
                                    <NavLink to = '/catalog' className="nav-link" href="/catalog.html">Каталог</NavLink>
                                </li>
                                <li className="nav-item"  key = '3'>
                                    <NavLink to = '/about' className="nav-link" href="/about.html">О магазине</NavLink>
                                </li>
                                <li className="nav-item"  key = '4'>
                                    <NavLink to = '/contacts' className="nav-link" href="/contacts.html">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                    {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                <div className="header-controls-pic header-controls-cart">
                                        <div className="header-controls-cart-full">1</div>
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                                    <input className="form-control" placeholder="Поиск" />
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    )
}