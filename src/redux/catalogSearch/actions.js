
import {CATALOG_SEARCH_VALUE, CATALOG_SEARCH_VALUE_DELETE, CATALOG_SEARCH_VALUE_ISSEARCHING, CATALOG_SEARCH_HEADER} from './types'

// function catalogSearchValue(value) {
//     return { type: CATALOG_SEARCH_VALUE, payload: { value } }
// }
// function catalogSearchValueDelete() {
//     return { type: CATALOG_SEARCH_VALUE_DELETE }
// }
// function catalogSearchValueIsSearching() {
//     return { type: CATALOG_SEARCH_VALUE_ISSEARCHING }
// }
// function catalogSearchHeader(value) {
//     return { type: CATALOG_SEARCH_HEADER, payload: {value} }
// }
const catalogSearchActions = {
    catalogSearchValue: (value) => ({ type: CATALOG_SEARCH_VALUE, payload: { value } }),
    catalogSearchValueDelete: () => ({ type: CATALOG_SEARCH_VALUE_DELETE }),
    catalogSearchValueIsSearching: (valueIsSearching) => ({ type: CATALOG_SEARCH_VALUE_ISSEARCHING, payload: {valueIsSearching} }),
}
export default catalogSearchActions