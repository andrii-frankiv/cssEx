import { List } from 'immutable'
import { FETCH_ENTITIES_START, FETCH_ENTITIES_STOP, ENTITIES_FETCH_FAILED, ENTITIES_FETCHED } from './action-types'

// state keys
const
  FETCHING = 'fetching',
  DATA = 'data',
  ERROR_MSG = 'error'
;

// initial state
const _state = Map({
    [ FETCHING ]: false,
    [ DATA ]: List(),
    [ ERROR_MSG ]: ''
  })
;



export default (state = _state, action) => {

  switch (action.type) {
    case FETCH_ENTITIES_START:
      return state.set(FETCHING, true)

    case FETCH_ENTITIES_STOP:
      return state.set(FETCHING, false)

    case ENTITIES_FETCHED:
      return state.set(DATA, Map(action.payload))

    case ENTITIES_FETCH_FAILED:
      return state
        .set(DATA, Map())
        .set(ERROR_MSG, action.meta)

    default:
      return state

  }
}