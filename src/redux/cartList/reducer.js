
import {
    CART_COUNT,
    CART_DELETE,
    CART_REQUEST,
    CART_SUCCESS,
    CART_ERROR,
    CART_ITEMS

} from './types'

const initialState = {
    countCart: 0,
    items: []
}

export default function cartList(state = initialState, action) {
    switch (action.type) {
        case CART_ITEMS:
            const { newItems } = action.payload
            let count = 0
            newItems.map((o) => count = count + Number(o.count))
            return { ...state, items: newItems, countCart: count};
        case CART_COUNT:
            const { value } = action.payload
            return { ...state, countCart: value};
        case CART_DELETE:
            const { valueDelete } = action.payload
            return { ...state, countCart: state.countCart - Number(valueDelete) };
        case CART_REQUEST:
            return { ...state, loadingCatalog: true, errorCatalog: null };
        case CART_SUCCESS:
            return { ...initialState};
        case CART_ERROR:
            const { errorCatalog } = action.payload
            return { ...state, loadingCatalog: false, errorCatalog };
        default:
            return state;
    }

}