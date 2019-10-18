import { createAction } from 'redux-action'
import { ENTITIES_FETCHED, FETCH_ENTITIES, ENTITIES_FETCH_FAILED, FETCH_ENTITIES_START, FETCH_ENTITIES_STOP } from './action-types'

export const
  fetchEntities = createAction(FETCH_ENTITIES),
  startFetchEntities = createAction(FETCH_ENTITIES_START),
  stopFetchEntities = createAction(FETCH_ENTITIES_STOP),
  entitiesFetched = createAction(ENTITIES_FETCHED),
  entitiesFetchFailed = createAction(ENTITIES_FETCH_FAILED)
;


