import {
    CATEGORIE_REQUEST,
    CATEGORIE_SUCCESS,
    CATEGORIE_ERROR
} from '../actionCreator'

const initialState = {
    loadingCategorie: false,
    errorCategorie: null,
    itemsCategorie: [{id:0, title:'Все'}],
    classNameCategorie: 'preloader'
}

export default function categorieListAdd(state = initialState, action) {
    switch (action.type) {
        case CATEGORIE_REQUEST:
            return { ...state, loadingCategorie: true, errorCategorie: null, classNameCategorie: 'preloader' };

        case CATEGORIE_SUCCESS:
            const {itemsCategorie} = action.payload
            return { ...state, loadingCategorie: false, errorCategorie: null, itemsCategorie: [...(initialState.itemsCategorie.concat(itemsCategorie))] , classNameCategorie: 'catalog-categories nav justify-content-center' };

        case CATEGORIE_ERROR:
            const {errorCategorie} = action.payload
            return { ...state, loadingCategorie: false, errorCategorie, classNameCategorie: 'preloader' };

        default:
            return state;
    }

}

