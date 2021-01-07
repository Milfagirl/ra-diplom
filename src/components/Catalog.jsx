import Container from './Container'
import banner from '../img/banner.jpg'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from './Main'
import {
    catalogSearchValue,
    catalogRequest,
    catalogSuccess,
    catalogError,
    catalogSearchValueDelete,
    catalogSearchValueIsSearching
} from '../redux/actionCreator'
export default function Catalog() {

    const { searchCatalogValue , isSearching } = useSelector(state => state.catalogSearch);
    
    const dispatch = useDispatch();
    const handleChangeSearch = (e) => {
        dispatch(catalogSearchValue(e.target.value))
    }

    const handleSearchCatalog = (e) => {
        e.preventDefault()
        console.log(searchCatalogValue)
        if (searchCatalogValue === '') {
            dispatch(catalogSearchValueDelete())
        } else {
            dispatch(catalogSearchValueIsSearching())
            const url =  `/api/items?q=${searchCatalogValue}`
            getItems(dispatch, url, catalogRequest, catalogSuccess, catalogError)
        }
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
                                <input className="form-control" placeholder="Поиск" onChange={handleChangeSearch} value={searchCatalogValue} />
                            </form>
                            < Container />
                        </section>
                    </div>
                </div>
            </main>

        </>
    )
}

