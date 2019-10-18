import { all, call, put, takeEvery } from 'redux-saga/effects';

import { entitiesFetched, entitiesFetchFailed, startFetchEntities, stopFetchEntities } from '../redux/entities/actions'
import { FETCH_ENTITIES } from '../redux/entities/action-types'

import { entityFetchFailed, entityFetched, startFetchEntity, stopFetchEntity } from '../redux/entity/actions'
import { FETCH_ENTITY } from '../redux/entity/action-types'


import API from '../api'

export function* fetchEntities() {
  yield put(startFetchEntities())

  try {
    const payload = yield call(API.fetchEntities);
    yield put(entitiesFetched({ payload }))
  } catch (e) {
    const meta = { message: e.message }
    yield put(entitiesFetchFailed({ meta }))
  } finally {
    yield put(stopFetchEntities)
  }
}

export function* fetchEntity(action) {
  yield put(startFetchEntity())

  try {
    const payload = yield call(API.fetchEntity, action.payload);
    yield put(entityFetched({ payload }))
  } catch (e) {
    const meta = { message: e.message }
    yield put(entityFetchFailed({ meta }))
  } finally {
    yield put(stopFetchEntity)
  }
}


export function* apidataLoader() {
  yield takeEvery(FETCH_ENTITIES, fetchEntities);
  yield takeEvery(FETCH_ENTITY, fetchEntities);
}

export default function* rootSaga() {
  yield all([apidataLoader()])
}