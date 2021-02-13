import { CATEGORIE_REQUEST, CATEGORIE_SUCCESS, CATEGORIE_ERROR } from './types'

// export function categorieRequest() {
//     return { type: CATEGORIE_REQUEST}
// }
// export function categorieSuccess(itemsCategorie) {
//     return { type: CATEGORIE_SUCCESS, payload: { itemsCategorie } }
// }
// export function categorieError(errorCategorie) {
//     return { type: CATEGORIE_ERROR, payload: { errorCategorie } }
// }

const categorieActions = {
    categorieRequest: () => ({ type: CATEGORIE_REQUEST }),
    categorieSuccess: (itemsCategorie) => ({ type: CATEGORIE_SUCCESS, payload: { itemsCategorie } }),
    categorieError: (errorCategorie) => ({ type: CATEGORIE_ERROR, payload: { errorCategorie } })
}
export default categorieActions