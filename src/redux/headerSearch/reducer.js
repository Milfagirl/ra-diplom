import {
    HEADER_PUT,
    HEADER_SEARCH
} from './types'

const initialState = {
    headerIsSearching: false,
    headerSearchValue: '',
}

export default function headerSearch(state = initialState, action) {
    switch (action.type) {
        case HEADER_PUT:
            const {valueHeaderPut} = action.payload
            return { ...state, headerIsSearching: valueHeaderPut };
        case HEADER_SEARCH:
            const {valueHeaderSearch} = action.payload
            return { ...state, headerSearchValue: valueHeaderSearch };
        default:
            return state;
    }

}

