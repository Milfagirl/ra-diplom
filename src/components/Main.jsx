import React, { useEffect, useRef } from 'react'
import banner from '../img/banner.jpg'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { NavLink, Link } from 'react-router-dom'
import Container from './Container'
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
    categorieError
} from '../redux/actionCreator'

export default function Main() {
    const { itemsHit, loadingHit, errorHit, classNameHit } = useSelector(state => state.hitListAdd);
    const { itemsCatalog, loadingCatalog, errorCatalog, classNameCatalog, filteredCatalog } = useSelector(state => state.catalogListAdd);
    const { itemsCategorie, loadingCategorie, errorCategorie, classNameCategorie } = useSelector(state => state.categorieListAdd);

    const dispatch = useDispatch();
    const urlHit = '/api/top-sales'
    const urlCatalog = '/api/items'
    const urlCategorie = '/api/categories'

    useEffect(() => {
        getItems(dispatch, urlHit, hitRequest, hitSuccess, hitError)

    }, [dispatch])



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
                       
                        {loadingHit ? <Preloader /> :
                            <div className={classNameHit}>
                                {itemsHit.map((item) => {
                                    return (
                                        <div className="col-4" key={item.id}>
                                            <div className="card">
                                                <img src={item.images[1]}
                                                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                                <div className="card-body">
                                                    <p className="card-text">{item.title}</p>
                                                    <p className="card-text">{item.price}</p>
                                                    <NavLink to={`/items/${itemsHit.indexOf(item)}`} className="btn btn-outline-primary">Заказать</NavLink>
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
                        < Container />
                    </section>
                </div>
            </div>
        </main>
    )
}


export const getItems = (dispatch, url, request, success, geterror) => {
    dispatch(request())
    axios.get(`${process.env.REACT_APP_API_URL}${url}`)
        .then(function (response) {
            dispatch(success(response.data))
        })
        .catch(function (error) {
            dispatch(geterror(error))
            console.log(error);
        })

}