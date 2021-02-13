import {
    ITEM_ORDER,
    ITEM_ORDER_REQUEST,
    ITEM_ORDER_SUCCESS,
    ITEM_ORDER_ERROR,
    ITEM_ORDER_SELECTED,
    ITEM_ORDER_COUNT
} from './types'

const initialState = {
    item: {},
    loadingItem: true,
    errorItem: null,
    itemFullInfo: {},
    selected: false,
    count: 1
}

export default function itemOrder(state = initialState, action) {
    switch (action.type) {
        case ITEM_ORDER:
            const { item } = action.payload
            return { ...state, item };
        case ITEM_ORDER_REQUEST:
            return { ...state, loadingItem: true, errorCatalog: null };
        case ITEM_ORDER_SUCCESS:
            const { itemFullInfo } = action.payload
            return { ...state, loadingItem: false, errorCatalog: null, itemFullInfo };
        case ITEM_ORDER_ERROR:
            const { errorItem } = action.payload
            return { ...state, loadingItem: false, errorItem };
        case ITEM_ORDER_SELECTED:
            const { value } = action.payload
            return { ...state, selected: value };
        case ITEM_ORDER_COUNT:
            const { valueCount } = action.payload
            return { ...state, count: valueCount };
        default:
            return state;
    }

}