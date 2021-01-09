export const HIT_REQUEST = 'HIT_REQUEST'
export const HIT_ERROR = 'HIT_ERROR'
export const HIT_SUCCESS = 'HIT_SUCCESS'

export function hitRequest() {
    return { type: HIT_REQUEST }
}
export function hitSuccess(itemsHit) {
    return { type: HIT_SUCCESS, payload: { itemsHit } }
}
export function hitError(errorHit) {
    return { type: HIT_ERROR, payload: { errorHit } }
}
// ---------------------------------------------------------------

export const CATALOG_REQUEST = 'CATALOG_REQUEST'
export const CATALOG_ERROR = 'CATALOG_ERROR'
export const CATALOG_SUCCESS = 'CATALOG_SUCCESS'
export const CATALOG_FILTERED= 'CATALOG_FILTERED'


export function catalogRequest() {
    return { type: CATALOG_REQUEST }
}
export function catalogSuccess(itemsCatalog) {
    return { type: CATALOG_SUCCESS, payload: { itemsCatalog } }
}
export function catalogError(errorCatalog) {
    return { type: CATALOG_ERROR, payload: { errorCatalog } }
}
export function catalogFiltered(filteredCatalog) {
    return { type: CATALOG_FILTERED, payload: { filteredCatalog } }
}


//----------------------------------------------------------------

export const CATEGORIE_REQUEST = 'CATEGORIE_REQUEST'
export const CATEGORIE_ERROR = 'CATEGORIE_ERROR'
export const CATEGORIE_SUCCESS = 'CATEGORIE_SUCCESS'

export function categorieRequest() {
    return { type: CATEGORIE_REQUEST}
}
export function categorieSuccess(itemsCategorie) {
    return { type: CATEGORIE_SUCCESS, payload: { itemsCategorie } }
}
export function categorieError(errorCategorie) {
    return { type: CATEGORIE_ERROR, payload: { errorCategorie } }
}

//-------------------------------------------
export const CATALOG_SEARCH_VALUE= 'CATALOG_SEARCH_VALUE'
export const CATALOG_SEARCH_VALUE_DELETE= 'CATALOG_SEARCH_VALUE_DELETE'
export const CATALOG_SEARCH_VALUE_ISSEARCHING= 'CATALOG_SEARCH_VALUE_ISSEARCHING'
export const CATALOG_SEARCH_HEADER= 'CATALOG_SEARCH_HEADER'

export function catalogSearchValue(value) {
    return { type: CATALOG_SEARCH_VALUE, payload: { value } }
}
export function catalogSearchValueDelete() {
    return { type: CATALOG_SEARCH_VALUE_DELETE }
}
export function catalogSearchValueIsSearching() {
    return { type: CATALOG_SEARCH_VALUE_ISSEARCHING }
}
export function catalogSearchHeader(value) {
    return { type: CATALOG_SEARCH_HEADER, payload: {value} }
}
//---------------------------------------------------------
export const ITEM_IN_ORDER= 'ITEM_IN_ORDER'
export const ITEM_IN_ORDER_REQUEST = 'ITEM_IN_ORDER_REQUEST'
export const ITEM_IN_ORDER_ERROR = 'ITEM_IN_ORDER_ERROR'
export const ITEM_IN_ORDER_SUCCESS = 'ITEM_IN_ORDER_SUCCESS'
export const ITEM_IN_ORDER_SELECTED = 'ITEM_IN_ORDER_SELECTED'
export const ITEM_IN_ORDER_COUNT = 'ITEM_IN_ORDER_COUNT'

export function itemInOrderRequest() {
    return { type: ITEM_IN_ORDER_REQUEST}
}
export function itemInOrderSuccess(itemFullInfo) {
    return { type: ITEM_IN_ORDER_SUCCESS, payload: { itemFullInfo } }
}
export function itemInOrderError(errorItem) {
    return { type: ITEM_IN_ORDER_ERROR , payload: { errorItem } }
}
export const itemInOrder = (item) => {
    return {type: ITEM_IN_ORDER, payload: {item}}
}
export const itemInOrderSelected = (value) => {
    return {type: ITEM_IN_ORDER_SELECTED, payload: {value}}
}
export const itemInOrderCount = (valueCount) => {
    return {type: ITEM_IN_ORDER_COUNT, payload: {valueCount}}
}

