import { ITEM_ORDER_REQUEST, ITEM_ORDER_SUCCESS, ITEM_ORDER_ERROR, ITEM_ORDER, ITEM_ORDER_SELECTED, ITEM_ORDER_COUNT } from './types'
// export function itemOrderRequest() {
//     return { type: ITEM_IN_ORDER_REQUEST}
// }
// export function itemOrderSuccess(itemFullInfo) {
//     return { type: ITEM_IN_ORDER_SUCCESS, payload: { itemFullInfo } }
// }
// export function itemOrderError(errorItem) {
//     return { type: ITEM_IN_ORDER_ERROR , payload: { errorItem } }
// }
// export const itemOrder = (item) => {
//     return {type: ITEM_IN_ORDER, payload: {item}}
// }
// export const itemOrderSelected = (value) => {
//     return {type: ITEM_IN_ORDER_SELECTED, payload: {value}}
// }
// export const itemOrderCount = (valueCount) => {
//     return {type: ITEM_IN_ORDER_COUNT, payload: {valueCount}}
// }

const itemOrderActions = {
    itemOrderRequest: () => ({ type: ITEM_ORDER_REQUEST }),
    itemOrderSuccess: (itemFullInfo) => ({ type: ITEM_ORDER_SUCCESS, payload: { itemFullInfo } }),
    itemOrderError: (errorItem) => ({ type: ITEM_ORDER_ERROR, payload: { errorItem } }),
    itemOrder: (item) => ({ type: ITEM_ORDER, payload: { item } }),
    itemOrderSelected: (value) => ({ type: ITEM_ORDER_SELECTED, payload: { value } }),
    itemOrderCount: (valueCount) => ({ type: ITEM_ORDER_COUNT, payload: { valueCount } })
}
export default itemOrderActions