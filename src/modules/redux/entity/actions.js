import { createAction } from 'redux-action'
import { ENTITY_FETCHED, ENTITY_FETCH_FAILED, FETCH_ENTITY_START, FETCH_ENTITY_STOP } from './action-types'

export const
  startFetchEntity = createAction(FETCH_ENTITY_START),
  stopFetchEntity = createAction(FETCH_ENTITY_STOP),
  entityFetched = createAction(ENTITY_FETCHED),
  entityFetchFailed = createAction(ENTITY_FETCH_FAILED)
;


