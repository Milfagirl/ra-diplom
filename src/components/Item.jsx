import React, { useEffect, useRef } from 'react'
import banner from '../img/banner.jpg'
import { useSelector, useDispatch } from 'react-redux';
import Preloader from './Preloader'
import { useHistory } from "react-router-dom";
import {getItems} from './Main'
import {
    itemInOrder,
    itemInOrderRequest,
    itemInOrderSuccess,
    itemInOrderError,
    itemInOrderSelected,
    itemInOrderCount

} from '../redux/actionCreator'

export default function Item() {
    const dispatch = useDispatch();
    const { item, loadingItem, errorItem, itemFullInfo, selected, count } = useSelector(state => state.itemOrder)
    const url = `/api/items/${item.id}`
    
    const activate = useRef(false)
    const countchange = useRef(1)
    useEffect(() => {
        getItems(dispatch, url, itemInOrderRequest, itemInOrderSuccess, itemInOrderError)
    }, [item])
   
    const handlesize = () => {
        activate.current = !activate.current
        activate.current ? dispatch(itemInOrderSelected(true)) : dispatch(itemInOrderSelected(false))
    }

    const handlePlus = () => {
        countchange.current++
        dispatch(itemInOrderCount(countchange.current))

    }
    const handleMinus = () => {
        countchange.current--
        countchange.current >= 1 ? dispatch(itemInOrderCount(countchange.current)) : countchange.current = 1
        
    }
    return (
        loadingItem ? <Preloader /> :
        <main className="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src={banner} className="img-fluid" alt="К весне готовы!" />
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>
                    <section class="catalog-item">
                        <h2 className="text-center">{itemFullInfo.title}</h2>
                        <div className="row">
                            <div className="col-5">
                                <img src={itemFullInfo.images[1]} className="img-fluid" alt="" />
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Артикул</td>
                                            <td>{itemFullInfo.sku}</td>
                                        </tr>
                                        <tr>
                                            <td>Производитель</td>
                                            <td>{itemFullInfo.manufacturer}</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет</td>
                                            <td>{itemFullInfo.color}</td>
                                        </tr>
                                        <tr>
                                            <td>Материалы</td>
                                            <td>{itemFullInfo.material}</td>
                                        </tr>
                                        <tr>
                                            <td>Сезон</td>
                                            <td>{itemFullInfo.season}</td>
                                        </tr>
                                        <tr>
                                            <td>Повод</td>
                                            <td>{itemFullInfo.reason}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <p>Размеры в наличии:
                                {itemFullInfo.sizes.map((o) => {
                                       if  (o.avalible) {
                                            return  <span className = {`catalog-item-size ${selected && 'selected'}`}><button  onClick = {handlesize}>{o.size}</button> </span>
                                       }
                                    })}
                                    </p>
                                    <p>Количество: <span className={`btn-group btn-group-sm pl-2 ${!selected && 'disabled'}`}>
                                        <button className={`btn btn-secondary ${!selected && 'disabled'}`} onClick = {handleMinus}>-</button>
                                        <span className="btn btn-outline-primary">{count}</span>
                                        <button className={`btn btn-secondary ${!selected && 'disabled'}`} onClick = {handlePlus}>+</button>
                                    </span>
                                    </p>
                                </div>
                                <button className = {`btn btn-danger btn-block btn-lg ${!selected && 'disabled'}`}>В корзину</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}