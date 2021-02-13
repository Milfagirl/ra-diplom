import { CATALOG_REQUEST, CATALOG_SUCCESS, CATALOG_ERROR, CATALOG_FILTERED, CATALOG_SUCCESS_MORE } from './types'

// function catalogRequest() {
//     return { type: CATALOG_REQUEST }
// }
// function catalogSuccess(itemsCatalog) {
//     return { type: CATALOG_SUCCESS, payload: { itemsCatalog } }
// }
// function catalogError(errorCatalog) {
//     return { type: CATALOG_ERROR, payload: { errorCatalog } }
// }
// function catalogFiltered(filteredCatalog) {
//     return { type: CATALOG_FILTERED, payload: { filteredCatalog } }
// }
const catalogListActions = {
    catalogRequest: () => ({ type: CATALOG_REQUEST }),
    catalogSuccess: (itemsCatalog) => ({ type: CATALOG_SUCCESS, payload: { itemsCatalog } }),
    catalogError: (errorCatalog) => ({ type: CATALOG_ERROR, payload: { errorCatalog } }),
    catalogFiltered: (filteredCatalog) => ({ type: CATALOG_FILTERED, payload: { filteredCatalog } }),
    catalogSuccessMore: (itemsCatalogMore) => ({ type: CATALOG_SUCCESS_MORE, payload: { itemsCatalogMore } })
}
export default catalogListActions