import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import cartListActions from '../redux/cartList/actions'
import { url,postItems }from '../redux/utils/api'
export default function Cart() {
    const itemOrderState = useSelector(state => state.itemOrder)
    const cartListState = useSelector(state => state.cartList)
    const [fullPriceRender, setFullPriceRender] = useState(0)

    const [phoneText, setPhoneText] = useState('')
    const [adressText, setAdressText] = useState('')
    const [checkRules, setCheckRules] = useState(false)


    const dispatch = useDispatch();
    const getLocalStorage = () => {
        
        let fullPrice = 0
        cartListState.items.map( o => fullPrice  = fullPrice + Number(o.cost))
        setFullPriceRender(fullPrice)
       
    }
    useEffect(() => {
        getLocalStorage()
    },[])

    const handleDelete = (id) => {
        const itemsList = []
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
            }
           if (JSON.parse(localStorage.getItem(key)).id === id) {
               localStorage.removeItem(key)
           } else itemsList.push(JSON.parse(localStorage.getItem(key)))
          
        }
        dispatch(cartListActions.cartItems(itemsList))
        getLocalStorage()

    }

    const handleForm  = e => {
        e.target.id === 'phone'? setPhoneText(e.target.value) : setAdressText(e.target.value)
    }

    const handleCheckRules = () => {
        setCheckRules(!checkRules)
       
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        
        const items = []
        cartListState.items.map( o => {
            items.push({
                id : o.id,
                price: o.price,
                count: o.count
            })
        })
       const data = JSON.stringify({
        owner: {
            phone: phoneText.toString(),
            address: adressText.toString(),
          },
          items: items
       })
        postItems(dispatch, `${url.urlCart}`, cartListActions.cartRequest, cartListActions.cartSuccess, cartListActions.cartError, data)
        setFullPriceRender(0)
        setPhoneText('')
        setAdressText('')
        setCheckRules(false)
    } 

    return (
        <div className='container'>
            <section className="cart">
                <h2 className="text-center">Корзина</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Название</th>
                            <th scope="col">Размер</th>
                            <th scope="col">Кол-во</th>
                            <th scope="col">Стоимость</th>
                            <th scope="col">Итого</th>
                            <th scope="col">Действия</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cartListState.items.map((o) => (
                            <tr key = {o.id}>
                                <th scope="row">{cartListState.items.indexOf(o) + 1}</th>
                                <td><Link to={`/items/${o.id}`}>{o.title}</Link></td>
                                <td>{o.size}</td>
                                <td>{o.count}</td>
                                <td>{`${o.price} руб.`}</td>
                                <td>{`${o.cost} руб.`}</td>
                                <td><button class="btn btn-outline-danger btn-sm" onClick = {() => handleDelete(o.id)}>Удалить</button></td>
                            </tr>
                        ))}


                        <tr>
                            <td colspan="5" class="text-right">Общая стоимость</td>
                            <td>{`${fullPriceRender} руб.`}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="order">
                <h2 className="text-center">Оформить заказ</h2>
                <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                    <form className="card-body" onSubmit = {handleSubmitForm}>
                        <div className="form-group">
                            <label>Телефон
                                <input className="form-control" id="phone" placeholder="Ваш телефон" onChange = {handleForm} value = {phoneText}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>Адрес доставки
                                <input className="form-control" id="address" placeholder="Адрес доставки" onChange = {handleForm} value = {adressText}/>
                            </label>
                        </div>
                        <div className="form-group form-check">
                            <label>
                                <input type="checkbox" className="form-check-input" id="agreement" checked = {checkRules} onChange = {handleCheckRules}/>
                                Согласен с правилами доставки
                                </label>
                        </div>
                        <button type="submit" className={`btn btn-outline-secondary ${!checkRules && 'disabled'}`}>Оформить</button>
                    </form>

                </div>
            </section>

        </div>
    )

}