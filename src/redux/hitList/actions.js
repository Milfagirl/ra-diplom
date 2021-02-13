import { HIT_REQUEST, HIT_SUCCESS, HIT_ERROR } from './types'

// function hitRequest() {
//     return { type: HIT_REQUEST }
// }
// function hitSuccess(itemsHit) {
//     return { type: HIT_SUCCESS, payload: { itemsHit } }
// }
// function hitError(errorHit) {
//     return { type: HIT_ERROR, payload: { errorHit } }
// }

const hitActions = {
    hitRequest: () => ({ type: HIT_REQUEST }),
    hitSuccess: (itemsHit) => ({ type: HIT_SUCCESS, payload: { itemsHit } }),
    hitError: (errorHit) => ({ type: HIT_ERROR, payload: { errorHit } })
}
export default hitActions