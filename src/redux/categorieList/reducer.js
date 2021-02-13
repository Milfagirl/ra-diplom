import {
    CATEGORIE_REQUEST,
    CATEGORIE_SUCCESS,
    CATEGORIE_ERROR
} from './types'

const initialState = {
    loadingCategorie: true,
    errorCategorie: null,
    itemsCategorie: [{id:0, title:'Все'}],
    
}

export default function categorieList(state = initialState, action) {
    switch (action.type) {
        case CATEGORIE_REQUEST:
            return { ...state, loadingCategorie: true, errorCategorie: null };

        case CATEGORIE_SUCCESS:
            const {itemsCategorie} = action.payload
            return { ...state, loadingCategorie: false, errorCategorie: null, itemsCategorie: [...(initialState.itemsCategorie.concat(itemsCategorie))]};

        case CATEGORIE_ERROR:
            const {errorCategorie} = action.payload
            return { ...state, loadingCategorie: false, errorCategorie};

        default:
            return state;
    }

}

