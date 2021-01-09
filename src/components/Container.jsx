import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { NavLink, Link } from 'react-router-dom'
import Preloader from './Preloader'

import {
    hitRequest,
    hitSuccess,
    hitError,
    catalogRequest,
    catalogSuccess,
    catalogError,
    catalogFiltered,
    categorieRequest,
    categorieSuccess,
    categorieError,
    itemInOrder
} from '../redux/actionCreator'
import { getItems } from './Main'

export default function Container() {
    const count = useRef(0)
    const btndisabled = useRef(false)
    const dispatch = useDispatch();
    const urlHit = '/api/top-sales'
    const urlCatalog = '/api/items'
    const urlCategorie = '/api/categories'


    const { itemsHit, loadingHit, errorHit, classNameHit } = useSelector(state => state.hitListAdd);
    const { itemsCatalog, loadingCatalog, errorCatalog, classNameCatalog, filteredCatalog } = useSelector(state => state.catalogListAdd);
    const { itemsCategorie, loadingCategorie, errorCategorie, classNameCategorie } = useSelector(state => state.categorieListAdd);
    const { searchCatalogValue , isSearching } = useSelector(state => state.catalogSearch);
    const {itemOrder} = useSelector(state => state.itemOrder)
    const handleCategorie = (e, id) => {
        e.preventDefault();
        count.current = 0
        if (Number(id) === 0) {
            const url = isSearching? `/api/items?q=${searchCatalogValue}` : urlCatalog
            getItems(dispatch, url, catalogRequest, catalogSuccess, catalogError)
            dispatch(catalogFiltered(''))
        } else {
            const url = isSearching? `/api/items?categoryId=${id}&q=${searchCatalogValue}` : `/api/items?categoryId=${id}`
            getItems(dispatch, url, catalogRequest, catalogSuccess, catalogError)
            dispatch(catalogFiltered(id))
        }
    }
    const handleGetMore = () => {

        count.current = count.current + 6
        const url = `/api/items?offset=${count.current}`
        const urlCount = `/api/items?categoryId=${filteredCatalog}&offset=${count.current}`
        const urlSearch = `/api/items?q=${searchCatalogValue}&offset=${count.current}`
        const urlSearchCount = `/api/items?q=${searchCatalogValue}&categoryId=${filteredCatalog}&offset=${count.current}`
        if (isSearching) {
            if (filteredCatalog === 0) {
                getItems(dispatch, urlSearch, catalogRequest, catalogSuccess, catalogError)
            } else {
                getItems(dispatch, urlSearchCount, catalogRequest, catalogSuccess, catalogError)
            }
        } else {
            if (filteredCatalog === 0) {
                getItems(dispatch, url, catalogRequest, catalogSuccess, catalogError)
            } else {
                getItems(dispatch, urlCount, catalogRequest, catalogSuccess, catalogError)
            }
        }
        
    }

    const handleOrder = (item) => {
       dispatch(itemInOrder(item))
    }
    useEffect(() => {
        if (!isSearching) {
            getItems(dispatch, urlCatalog, catalogRequest, catalogSuccess, catalogError)
        } else getItems(dispatch, (urlCatalog + `?q=${searchCatalogValue}`), catalogRequest, catalogSuccess, catalogError)
        getItems(dispatch, urlCategorie, categorieRequest, categorieSuccess, categorieError)
    }, [dispatch])

    useEffect(() => {
        if (!itemsCatalog.length || itemsCatalog.length < 6) {
            btndisabled.current.disabled = true;
        } else btndisabled.current.disabled = false;
    }, [itemsCatalog.length])


    return (
        <>
            {loadingCategorie ? <Preloader /> :
                <ul className={classNameCategorie}>
                    {itemsCategorie.map((item) => {
                        return (
                            <li key={item.id} className="nav-item" onClick={(e) => handleCategorie(e, item.id)}>
                                <Link to='#' className="nav-link active" >{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            }
            {loadingCatalog ? <Preloader /> :
                <div className={classNameCatalog}>
                    {itemsCatalog.map((item => {
                        return (
                            <div className="col-4" key={item.id}>
                                <div className="card catalog-item-card">
                                    <img src={item.images[1]} className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div className="card-body">
                                        <p className="card-text">{item.title}</p>
                                        <p className="card-text">{item.price}</p>
                                        <NavLink to={`/items/${item.id}`} className="btn btn-outline-primary" onClick= {() => handleOrder(item)}>Заказать</NavLink>
                                    </div>
                                </div>
                            </div>

                        )
                    }))}
                </div>
            }
            <div className="text-center">
                <button className="btn btn-outline-primary" onClick={handleGetMore} ref={btndisabled}>Загрузить ещё</button>
            </div>
        </>
    )

}