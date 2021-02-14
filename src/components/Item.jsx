import React, { useEffect, useRef, useState } from 'react'
import banner from '../img/banner.jpg'
import { useSelector, useDispatch } from 'react-redux';
import Preloader from './Preloader'
import { useHistory } from "react-router-dom";

import catalogListActions from '../redux/catalogList/actions'
import catalogSearchActions from '../redux/catalogSearch/actions'
import categorieListActions from '../redux/categorieList/actions'
import hitListActions from '../redux/hitList/actions'
import itemOrderActions from '../redux/itemOrder/actions'
import cartListActions from '../redux/cartList/actions'

import { url, getItems } from '../redux/utils/api'


export default function Item() {
    const hitListState = useSelector(state => state.hitList);
    const catalogListState = useSelector(state => state.catalogList);
    const categorieListState = useSelector(state => state.categorieList);
    const catalogSearchState = useSelector(state => state.catalogSearch);
    const itemOrderState = useSelector(state => state.itemOrder)
    const cartListState = useSelector(state => state.cartList)

    const dispatch = useDispatch();
    let history = useHistory()

    const [activate, setActivate] = useState(false)
    const [countChange, setCountChange] = useState(1)   //количество заказанного товара
    const [checkSize, setCheckSize] = useState('') // выбранный размер
   
    useEffect(() => {
        !itemOrderState.item.id && history.push('/')
        const newUrl = `${url.urlCatalog}/${itemOrderState.item.id}`
        getItems(dispatch, newUrl, itemOrderActions.itemOrderRequest, itemOrderActions.itemOrderSuccess, itemOrderActions.itemOrderError)
        console.log(itemOrderState.item )
        
    }, [itemOrderState.item])

    const handlesize = (value) => {
        setActivate(!activate)
        setCheckSize(value)
    }

    const handlePlus = () => {
        setCountChange(countChange + 1)
        countChange >= 10 && setCountChange(10)


    }
    const handleMinus = () => {
        setCountChange(countChange - 1)
        countChange <= 1 && setCountChange(1)
    }

    const handleBasket = () => {
        dispatch(itemOrderActions.itemOrderCount(countChange))

        const newItem = { id: itemOrderState.itemFullInfo.id, title: itemOrderState.itemFullInfo.title, size: checkSize, count: countChange, price: itemOrderState.itemFullInfo.price, cost: Number(countChange) * Number(itemOrderState.itemFullInfo.price) }
        const itemsList = []
       
        if (localStorage.length) {

            for (let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                    continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
                }
                const sItem = JSON.parse(localStorage.getItem(key))
                
                if ((sItem.size) === newItem.size && Number(sItem.price) === Number(newItem.price)) {
                    const sKey = key
                    localStorage.removeItem(key)
                    sItem.count = Number(sItem.count) + Number(newItem.count)
                    sItem.cost = sItem.count * sItem.price
                    localStorage.setItem(`${sKey}`, JSON.stringify(sItem))
                } else {
                    localStorage.setItem(`${Number(key) + 1}`, JSON.stringify(newItem))
                }
                
            }
            for (let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                    continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
                }
                itemsList.push(JSON.parse(localStorage.getItem(key)))
            }
            dispatch(cartListActions.cartItems(itemsList))
           


        } else {
            localStorage.setItem('0', JSON.stringify(newItem))
            itemsList.push(newItem)
            dispatch(cartListActions.cartItems(itemsList))
           

        }
   
        setCountChange(1)
        setActivate(false)
        setCheckSize('')
        dispatch(catalogSearchActions.catalogSearchValueIsSearching(false))
        dispatch(catalogSearchActions.catalogSearchValue(''))

    }
    return (
        itemOrderState.loadingItem ? <Preloader /> :
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img src={banner} className="img-fluid" alt="К весне готовы!" />
                            <h2 className="banner-header">К весне готовы!</h2>
                        </div>
                        <section class="catalog-item">
                            <h2 className="text-center">{itemOrderState.itemFullInfo.title}</h2>
                            <div className="row">
                                <div className="col-5">
                                    <img src={itemOrderState.itemFullInfo.images[1]} className="img-fluid" alt="" />
                                </div>
                                <div className="col-7">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Артикул</td>
                                                <td>{itemOrderState.itemFullInfo.sku}</td>
                                            </tr>
                                            <tr>
                                                <td>Производитель</td>
                                                <td>{itemOrderState.itemFullInfo.manufacturer}</td>
                                            </tr>
                                            <tr>
                                                <td>Цвет</td>
                                                <td>{itemOrderState.itemFullInfo.color}</td>
                                            </tr>
                                            <tr>
                                                <td>Материалы</td>
                                                <td>{itemOrderState.itemFullInfo.material}</td>
                                            </tr>
                                            <tr>
                                                <td>Сезон</td>
                                                <td>{itemOrderState.itemFullInfo.season}</td>
                                            </tr>
                                            <tr>
                                                <td>Повод</td>
                                                <td>{itemOrderState.itemFullInfo.reason}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <p>Размеры в наличии:
                                        {itemOrderState.itemFullInfo.sizes.map((o) => {
                                            if (o.avalible) {
                                                return <span className={`catalog-item-size ${activate && 'selected'}`}><button onClick={() => handlesize(o.size)}>{o.size}</button> </span>
                                            }
                                        })}
                                        </p>
                                        <p>Количество: <span className={`btn-group btn-group-sm pl-2 ${!itemOrderState.selected && 'disabled'}`}>
                                            <button className={`btn btn-secondary ${!activate && 'disabled'}`} onClick={(handleMinus)}>-</button>
                                            <span className="btn btn-outline-primary">{countChange}</span>
                                            <button className={`btn btn-secondary ${!activate && 'disabled'}`} onClick={handlePlus}>+</button>
                                        </span>
                                        </p>
                                    </div>
                                    <button className={`btn btn-danger btn-block btn-lg ${!activate && 'disabled'}`} onClick={handleBasket}>В корзину</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
    )
}