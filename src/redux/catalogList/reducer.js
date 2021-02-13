import {
    CATALOG_REQUEST,
    CATALOG_SUCCESS,
    CATALOG_ERROR,
    CATALOG_FILTERED,
    CATALOG_SUCCESS_MORE

} from './types'

const initialState = {
    loadingCatalog: true,
    errorCatalog: null,
    itemsCatalog: [],
    filteredCatalog: 0,
    searchHeader: false,
    itemsDone: false


}

export default function catalogList(state = initialState, action) {
    switch (action.type) {
        case CATALOG_REQUEST:
            return { ...state, loadingCatalog: true, errorCatalog: null };

        case CATALOG_SUCCESS:
            const { itemsCatalog } = action.payload
            if (itemsCatalog.length === 0 || itemsCatalog.length < 6) {
                return { ...state, loadingCatalog: false, errorCatalog: null, itemsCatalog, itemsDone: true };
            } else return { ...state, loadingCatalog: false, errorCatalog: null, itemsCatalog, itemsDone: false};

        case CATALOG_ERROR:
            const { errorCatalog } = action.payload
            return { ...state, loadingCatalog: false, errorCatalog };
        case CATALOG_FILTERED:
            const { filteredCatalog } = action.payload
            return { ...state, filteredCatalog: Number(filteredCatalog) };
        case CATALOG_SUCCESS_MORE:
            const { itemsCatalogMore } = action.payload
            if (itemsCatalogMore.length === 0 || itemsCatalogMore.length < 6) {
                return { ...state, loadingCatalog: false, errorCatalog: null, itemsCatalog: state.itemsCatalog, itemsDone: true };
            } else return { ...state, loadingCatalog: false, errorCatalog: null, itemsCatalog: state.itemsCatalog.concat(itemsCatalogMore), itemsDone: false};
        // case CATALOG_SEARCH_HEADER:
        //     const { value } = action.payload
        //     return { ...state, searchHeader: value };

        default:
            return state;
    }

}