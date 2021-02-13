import {
    CATALOG_SEARCH_VALUE,
    CATALOG_SEARCH_VALUE_DELETE,
    CATALOG_SEARCH_VALUE_ISSEARCHING
} from './types'

const initialState = {
    searchCatalogValue: '',
    isSearching: false
}
export default function catalogSearch(state = initialState, action) {
    switch (action.type) {
        case CATALOG_SEARCH_VALUE:
            const { value } = action.payload
            return { ...state, searchCatalogValue: value }
        case CATALOG_SEARCH_VALUE_DELETE:
            return { initialState }
        case CATALOG_SEARCH_VALUE_ISSEARCHING:
            const {valueIsSearching} = action.payload
            return { ...state, isSearching: valueIsSearching }
        default:
            return state;
    }
}