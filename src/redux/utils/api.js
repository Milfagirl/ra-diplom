
import axios from 'axios'

const urlHit = '/api/top-sales'
const urlCatalog = '/api/items'
const urlCategorie = '/api/categories'
const urlSearchItems =  '/api/items?'
const urlCart = '/api/order'


export const url = {
    urlHit,
    urlCatalog,
    urlCategorie,
    urlSearchItems,
    urlCart
  
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

export const postItems = (dispatch, url, request, success, geterror, data) => {
    dispatch(request())
    axios(`${process.env.REACT_APP_API_URL}${url}`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors',
          },
        data})

    // axios.post(`${process.env.REACT_APP_API_URL}${url}`,  {data})
        .then(function (response) {
            dispatch(success())
            localStorage.clear()
        })
        .catch(function (error) {
            dispatch(geterror())
            console.log(error);
        })

}