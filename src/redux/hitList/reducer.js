
import {
    HIT_REQUEST,
    HIT_SUCCESS,
    HIT_ERROR,
} from './types'

const initialState = {
    loadingHit: true,
    errorHit: null,
    itemsHit: [],
}

export default function hitList(state = initialState, action) {
    switch (action.type) {
        case HIT_REQUEST:
            return { ...state, loadingHit: true, errorHit: null};

        case HIT_SUCCESS:
            const {itemsHit} = action.payload
            return { ...state, loadingHit: false, errorHit: null, itemsHit:itemsHit };

        case HIT_ERROR:
            const {errorHit} = action.payload
            return { ...state, loadingHit: false, errorHit:errorHit };

        default:
            return state;
    }

}