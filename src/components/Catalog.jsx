import Container from './Container'
import banner from '../img/banner.jpg'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import catalogListActions from '../redux/catalogList/actions'
import catalogSearchActions from '../redux/catalogSearch/actions'




import {url, getItems} from '../redux/utils/api'

export default function Catalog() {
    
    const catalogSearchState  = useSelector(state => state.catalogSearch);
    const dispatch = useDispatch();
    const handleChangeSearch = (e) => {
        dispatch(catalogSearchActions.catalogSearchValue(e.target.value))
        if (!e.target.value) {
            dispatch(catalogSearchActions.catalogSearchValueIsSearching(false))
        }
        
    }

    const handleSearchCatalog = (e) => {
        e.preventDefault()
        dispatch(catalogSearchActions.catalogSearchValueIsSearching(true))
        getItems(dispatch, `${url.urlCatalog}?q=${catalogSearchState.searchCatalogValue}`, catalogListActions.catalogRequest, catalogListActions.catalogSuccess, catalogListActions.catalogError)
          
        
    }
   
    return (
        <>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img src={banner} className="img-fluid" alt="К весне готовы!" />
                            <h2 className="banner-header">К весне готовы!</h2>
                        </div>
                        <section className="catalog">
                            <h2 className="text-center">Каталог</h2>
                            <form className="catalog-search-form form-inline" type='Submit' onSubmit={handleSearchCatalog}>
                                <input className="form-control" placeholder="Поиск" onChange={handleChangeSearch} value={ catalogSearchState.searchCatalogValue} />
                            </form>
                            < Container />
                        </section>
                    </div>
                </div>
            </main>

        </>
    )
}

