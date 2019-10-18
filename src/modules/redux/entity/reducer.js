import { Map } from 'immutable'
import { FETCH_ENTITY_START, FETCH_ENTITY_STOP, ENTITY_FETCH_FAILED, ENTITY_FETCHED } from './action-types'

// state keys
const
  FETCHING = 'fetching',
  DATA = 'data',
  ERROR_MSG = 'error'
;

// initial state
const _state = Map({
    [ FETCHING ]: false,
    [ DATA ]: Map(),
    [ ERROR_MSG ]: ''
  })
;



export default (state = _state, action) => {

  switch (action.type) {
    case FETCH_ENTITY_START:
      return state.set(FETCHING, true)

    case FETCH_ENTITY_STOP:
      return state.set(FETCHING, false)

    case ENTITY_FETCHED:
      return state.set(DATA, Map(action.payload))

    case ENTITY_FETCH_FAILED:
      return state
        .set(DATA, Map())
        .set(ERROR_MSG, action.meta)

    default:
      return state

  }
}