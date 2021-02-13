  import { createStore, combineReducers } from 'redux'
import catalogList from './catalogList/reducer'
import hitList from './hitList/reducer'
import categorieList from './categorieList/reducer'
import catalogSearch from './catalogSearch/reducer'
import itemOrder from './itemOrder/reducer'
import headerSearch from './headerSearch/reducer'
import cartList from './cartList/reducer'


const reducer = combineReducers({
    catalogList,
    hitList,
    categorieList,
    catalogSearch,
    itemOrder,
    headerSearch, 
    cartList  
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store