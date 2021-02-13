import React, { useEffect, useRef } from 'react'
import banner from '../img/banner.jpg'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { NavLink, Link } from 'react-router-dom'
import Container from './Container'
import Preloader from './Preloader'
import { useHistory } from "react-router-dom";

import catalogListActions from '../redux/catalogList/actions'
import catalogSearchActions from '../redux/catalogSearch/actions'
import categorieListActions from '../redux/categorieList/actions'
import hitListActions from '../redux/hitList/actions'
import itemOrderActions from '../redux/itemOrder/actions'

import {url, getItems} from '../redux/utils/api'



export default function Main() {

    const hitListState = useSelector(state => state.hitList);
    const catalogListState = useSelector(state => state.catalogList);
    const categorieListState = useSelector(state => state.categorieList);
    const catalogSearchState  = useSelector(state => state.catalogSearch);
    const itemOrderState = useSelector(state => state.itemOrder)
  
    const dispatch = useDispatch();
    
    let history = useHistory();

    useEffect(() => {
        getItems(dispatch, url.urlHit, hitListActions.hitRequest, hitListActions.hitSuccess, hitListActions.hitError)
    }, [dispatch])

    const handleChangeSearch = (e) => {
        dispatch(catalogListActions.catalogSearchValue(e.target.value))
    }

    const handleSearchCatalog = (e) => {
        e.preventDefault()
        history.push('/catalog');
        dispatch(catalogSearchActions.catalogSearchValueIsSearching())
        dispatch(catalogSearchActions.catalogSearchHeader(false))
    }

    const handleOrder = (item) => {
        dispatch(itemOrderActions.itemOrder(item))
     }
    
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src={banner} className="img-fluid" alt="К весне готовы!" />
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>

                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>

                        {hitListState.loadingHit ? <Preloader /> : <div className='row'>
                                {hitListState.itemsHit.map((item) => {
                                    return (
                                        <div className="col-4" key={item.id}>
                                            <div className="card">
                                                <img src={item.images[1]}
                                                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                                <div className="card-body">
                                                    <p className="card-text">{item.title}</p>
                                                    <p className="card-text">{item.price}</p>
                                                    <NavLink to={`/items/${hitListState.itemsHit.indexOf(item)}`} className="btn btn-outline-primary" onClick= {() => handleOrder(item)}>Заказать</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })}
                            </div>
                        }
                    </section>

                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        {catalogSearchState.searchHeader &&
                            <form className="catalog-search-form form-inline" type='Submit' onSubmit={handleSearchCatalog} >
                                <input className="form-control" placeholder="Поиск" onChange={handleChangeSearch} value= {catalogSearchState.searchCatalogValue} />
                            </form>
                        }
                        < Container />
                    </section>
                </div>
            </div>
        </main >
    )
}


