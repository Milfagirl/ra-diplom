import {
    CATALOG_REQUEST,
    CATALOG_SUCCESS,
    CATALOG_ERROR,
    CATALOG_FILTERED,
    CATALOG_SEARCH_HEADER
} from '../actionCreator'

const initialState = {
    loadingCatalog: false,
    errorCatalog: null,
    itemsCatalog: [],
    classNameCatalog: 'preloader',
    filteredCatalog: 0,
    searchHeader: false


}

export default function catalogListAdd(state = initialState, action) {
    switch (action.type) {
        case CATALOG_REQUEST:
            return { ...state, loadingCatalog: true, errorCatalog: null, classNameCatalog: 'preloader' };

        case CATALOG_SUCCESS:
            const { itemsCatalog } = action.payload

            return { ...state, loadingCatalog: false, errorCatalog: null, itemsCatalog, classNameCatalog: 'row' };

        case CATALOG_ERROR:
            const { errorCatalog } = action.payload
            return { ...state, loadingCatalog: false, errorCatalog, classNameCatalog: 'preloader' };
        case CATALOG_FILTERED:
            const { filteredCatalog } = action.payload
            return { ...state, filteredCatalog: Number(filteredCatalog) };
        case CATALOG_SEARCH_HEADER:
            const { value } = action.payload
            return { ...state, searchHeader: value };

        default:
            return state;
    }

}