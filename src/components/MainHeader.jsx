import React, { useEffect, useState } from 'react'
import logo from '../img/header-logo.png'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

// import catalogListActions from '../redux/catalogList/actions'
import catalogSearchActions from '../redux/catalogSearch/actions'
// import categorieListActions from '../redux/categorieList/actions'
// import hitListActions from '../redux/hitList/actions'
// import itemOrderActions from '../redux/itemOrder/actions'
import headerSearchActions from '../redux/headerSearch/actions'

// import { url, getItems } from '../redux/utils/api'
import cartListActions from '../redux/cartList/actions';



export default function MainHeader() {
    let history = useHistory();

    const hitListState = useSelector(state => state.hitList);
    // const catalogListState = useSelector(state => state.catalogList);
    // const categorieListState = useSelector(state => state.categorieList);
    // const catalogSearchState = useSelector(state => state.catalogSearch);
    // const itemOrderState = useSelector(state => state.itemOrder)
    const headerSearchState = useSelector(state => state.headerSearch)
    const cartListState = useSelector(state => state.cartList)
    const dispatch = useDispatch();

    const [searchVisible, setSearchVisible] = useState('invisible')

    const handleSearchHeader = (e) => {
        e.preventDefault()
        if (headerSearchState.headerIsSearching) {
            if (headerSearchState.headerSearchValue) {
                dispatch(catalogSearchActions.catalogSearchValue(headerSearchState.headerSearchValue))
                dispatch(headerSearchActions.headerPut(false))
                setSearchVisible('invisible')
                dispatch(headerSearchActions.headerSearch(''))
                dispatch(catalogSearchActions.catalogSearchValueIsSearching(true))
                history.push('/catalog')
            } else {
                dispatch(headerSearchActions.headerPut(false))
                setSearchVisible('invisible')
                dispatch(headerSearchActions.headerSearch(''))
            }
        } else {
            dispatch(headerSearchActions.headerPut(true))
            setSearchVisible('visible')
        }
    }

    const handleInputSearch = (event) => {
        dispatch(headerSearchActions.headerSearch(event.target.value))
    }


    useEffect(() => {
        const items = []
        let countLocalStorage = 0
        if (localStorage.length) {
            for (let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                    continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
                }
                items.push(JSON.parse(localStorage.getItem(key)))
            }
            items.map(o => countLocalStorage = countLocalStorage + Number(o.count))
            console.log('items', items)
            dispatch(cartListActions.cartItems(items))
            dispatch(cartListActions.cartCountChange(countLocalStorage))
        }
       
    }, [dispatch])

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <NavLink to='/' className="navbar-brand">
                            <img src={logo} alt="Bosa Noga" />
                        </NavLink>

                        <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active" key='1'>
                                    <NavLink to='/' className="nav-link">Главная</NavLink>
                                </li>
                                <li className="nav-item" key='2'>
                                    <NavLink to='/catalog' className="nav-link" href="/catalog.html">Каталог</NavLink>
                                </li>
                                <li className="nav-item" key='3'>
                                    <NavLink to='/about' className="nav-link" href="/about.html">О магазине</NavLink>
                                </li>
                                <li className="nav-item" key='4'>
                                    <NavLink to='/contacts' className="nav-link" href="/contacts.html">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleSearchHeader}></div>
                                    {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                    <NavLink to='/cart' className="header-controls-pic header-controls-cart" >
                                        
                                            <div className="header-controls-cart-full">{cartListState.countCart}</div>
                                        
                                        <div className="header-controls-cart-menu"></div>
                                    </NavLink>
                                </div>
                                <form data-id="search-form" className={`header-controls-search-form form-inline ${searchVisible}`} onSubmit={handleSearchHeader}>
                                    <input className="form-control" placeholder="Поиск" value={headerSearchState.headerSearchValue} onChange={handleInputSearch} />
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    )
}