import { CART_COUNT, CART_DELETE, CART_REQUEST, CART_ERROR, CART_SUCCESS, CART_ITEMS} from './types'

const cartListActions = {
    cartItems : (newItems) => ({ type: CART_ITEMS, payload: {newItems} }),
    cartCountChange: (value) => ({ type: CART_COUNT, payload: {value} }),
    cartCountDelete: (valueDelete) => ({ type: CART_DELETE, payload: {valueDelete} }),
    cartRequest: () => ({ type: CART_REQUEST }),
    cartSuccess: () => ({ type: CART_SUCCESS }),
    cartError: (errorCart) => ({ type: CART_ERROR, payload: { errorCart} }),

}
export default cartListActions