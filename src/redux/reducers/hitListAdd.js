
import {
    HIT_REQUEST,
    HIT_SUCCESS,
    HIT_ERROR,
} from '../actionCreator'

const initialState = {
    loadingHit: false,
    errorHit: null,
    itemsHit: [],
    classNameHit: 'preloader'
}

export default function hitListAdd(state = initialState, action) {
    switch (action.type) {
        case HIT_REQUEST:
            return { ...state, loadingHit: true, errorHit: null, classNameHit: 'preloader' };

        case HIT_SUCCESS:
            const {itemsHit} = action.payload
            return { ...state, loadingHit: false, errorHit: null, itemsHit:itemsHit, classNameHit: 'row' };

        case HIT_ERROR:
            const {errorHit} = action.payload
            return { ...state, loadingHit: false, errorHit:errorHit, classNameHit: 'preloader' };

        default:
            return state;
    }

}