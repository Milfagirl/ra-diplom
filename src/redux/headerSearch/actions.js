import {HEADER_PUT, HEADER_SEARCH} from './types'

const headerSearchActions = {
    headerPut: (valueHeaderPut) => ({ type: HEADER_PUT , payload: {valueHeaderPut} }),
    headerSearch: (valueHeaderSearch) => ({ type: HEADER_SEARCH, payload: {valueHeaderSearch} })
  
}
export default headerSearchActions