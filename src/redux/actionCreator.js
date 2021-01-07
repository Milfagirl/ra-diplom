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

export function catalogSearchValue(value) {
    return { type: CATALOG_SEARCH_VALUE, payload: { value } }
}
export function catalogSearchValueDelete() {
    return { type: CATALOG_SEARCH_VALUE_DELETE }
}
export function catalogSearchValueIsSearching() {
    return { type: CATALOG_SEARCH_VALUE_ISSEARCHING }
}