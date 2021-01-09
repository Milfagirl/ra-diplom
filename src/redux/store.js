  import { createStore, combineReducers } from 'redux'
import catalogListAdd from './reducers/catalogListAdd'
import hitListAdd from './reducers/hitListAdd'
import categorieListAdd from './reducers/categorieListAdd'
import catalogSearch from './reducers/catalogSearch'
import itemOrder from './reducers/itemOrder'

const reducer = combineReducers({
    catalogListAdd,
    hitListAdd,
    categorieListAdd,
    catalogSearch,
    itemOrder    
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store