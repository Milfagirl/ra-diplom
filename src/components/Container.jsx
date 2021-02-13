import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios'
import { NavLink, Link } from 'react-router-dom'
import Preloader from './Preloader'

import catalogListActions from '../redux/catalogList/actions'
// import catalogSearchActions from '../redux/catalogSearch/actions'
import categorieListActions from '../redux/categorieList/actions'
// import hitListActions from '../redux/hitList/actions'
import itemOrderActions from '../redux/itemOrder/actions'

import {url, getItems} from '../redux/utils/api'


export default function Container() {
    // const hitListState = useSelector(state => state.hitList);
    const catalogListState = useSelector(state => state.catalogList);
    const categorieListState = useSelector(state => state.categorieList);
    const catalogSearchState  = useSelector(state => state.catalogSearch);
    // const itemOrderState = useSelector(state => state.itemOrder)

    const count = useRef(0)
    const btndisabled = useRef(false)
    const dispatch = useDispatch();

    const handleCategorie = (e, id) => {
        e.preventDefault();
        count.current = 0
        
        if (Number(id) === 0) {
            const newurl = catalogSearchState.isSearching?  `${url.urlSearchItems}q=${catalogSearchState.searchCatalogValue}` : url.urlCatalog
            getItems(dispatch, newurl, catalogListActions.catalogRequest, catalogListActions.catalogSuccess, catalogListActions.catalogError)
            dispatch(catalogListActions.catalogFiltered(''))
        } else {
            const newurl = catalogSearchState.isSearching? `${url.urlSearchItems}q=${catalogSearchState.searchCatalogValue}&categoryId=${id}` : `${url.urlSearchItems}categoryId=${id}`
            getItems(dispatch, newurl, catalogListActions.catalogRequest, catalogListActions.catalogSuccess, catalogListActions.catalogError)
            dispatch(catalogListActions.catalogFiltered(Number(id)))
        }
    }
   
    const handleGetMore = () => {

        count.current = count.current + 6
        const newurl = `${url.urlSearchItems}offset=${count.current}`
        const urlCount = `${url.urlSearchItems}categoryId=${catalogListState.filteredCatalog}&offset=${count.current}`
        const urlSearch = `${url.urlSearchItems}q=${catalogSearchState.searchCatalogValue}&offset=${count.current}`
        const urlSearchCount = `${url.urlSearchItems}?q=${catalogSearchState.searchCatalogValue}&categoryId=${catalogListState.filteredCatalog}&offset=${count.current}`
        if (catalogSearchState.isSearching) {
            if (catalogListState.filteredCatalog === 0) {
                getItems(dispatch, urlSearch, catalogListActions.catalogRequest, catalogListActions.catalogSuccessMore, catalogListActions.catalogError)
            } else {
                getItems(dispatch, urlSearchCount, catalogListActions.catalogRequest, catalogListActions.catalogSuccessMore, catalogListActions.catalogError)
            }
        } else {
            if (catalogListState.filteredCatalog === 0) {
                getItems(dispatch, newurl, catalogListActions.catalogRequest, catalogListActions.catalogSuccessMore, catalogListActions.catalogError)
            } else {
                getItems(dispatch, urlCount, catalogListActions.catalogRequest, catalogListActions.catalogSuccessMore, catalogListActions.catalogError)
            }
        }
        
    }

    const handleOrder = (item) => {
       dispatch(itemOrderActions.itemOrder(item))
    }
    useEffect(() => {
        if (!catalogSearchState.isSearching) {
            getItems(dispatch, url.urlCatalog, catalogListActions.catalogRequest, catalogListActions.catalogSuccess, catalogListActions.catalogError)
         
        } else {
            getItems(dispatch, `${url.urlCatalog}?q=${catalogSearchState.searchCatalogValue}`, catalogListActions.catalogRequest, catalogListActions.catalogSuccess, catalogListActions.catalogError)
          
        }
        getItems(dispatch, url.urlCategorie, categorieListActions.categorieRequest, categorieListActions.categorieSuccess, categorieListActions.categorieError)
        
    }, [dispatch])

    useEffect(() => {
        if (catalogListState.itemsDone) {
            btndisabled.current.disabled = true;
        } else btndisabled.current.disabled = false;
    }, [catalogListState.itemsDone])


    return (
        <div>
            {categorieListState.loadingCategorie ? <Preloader /> :
                <ul className='catalog-categories nav justify-content-center'>
                    {categorieListState.itemsCategorie.map((item) => {
                        return (
                            <li key={item.id} className="nav-item" onClick={(e) => handleCategorie(e, item.id)}>
                                <Link to='#' className="nav-link active" >{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            }
            {catalogListState.loadingCatalog ? <Preloader /> :
                <div className='row'>
                    {catalogListState.itemsCatalog.map((item => {
                        return (
                            <div className="col-4" key={item.id}>
                                <div className="card catalog-item-card">
                                    <img src={item.images[1] } className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
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
        </div>
    )

}