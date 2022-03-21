import { LOCATION_CHANGE } from "connected-react-router"
import {
  apply,
  call,
  fork,
  put,
  select,
  take,
  takeEvery,
} from "redux-saga/effects"
import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../../reducers/people/types"
import {
  FETCH_USER_DETAIL,
  FETCH_USER_DETAIL_FAILURE,
  FETCH_USER_DETAIL_SUCCESS,
} from "../../reducers/peopleDetails/types"

export function* loadPeopleDetails({ payload }) {
  try {
    const request = yield call(fetch, `https://swapi.dev/api/people/${payload}`)
    const data = yield apply(request, request.json)

    yield put({
      type: FETCH_USER_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: FETCH_USER_DETAIL_FAILURE,
      payload: error,
    })
  }
}

export function* loadPeoples({ payload }) {
  const { page, search } = payload
  const req = yield call(
    fetch,
    `https://swapi.dev/api/people?page=${page}&search=${search}`
  )
  const data = yield apply(req, req.json)
  yield put({
    type: FETCH_USERS_SUCCESS,
    payload: data,
  })
}

export function* routeChangeSaga() {
  while (true) {
    const action = yield take(LOCATION_CHANGE)
    if (action.payload.location.pathname === "/") {
      const state = yield select(s => s.people)
      const { page, search } = state

      yield put({
        type: FETCH_USERS,
        payload: {
          page,
          search,
        },
      })
    }
  }
}

export default function* peopleSaga() {
  yield fork(routeChangeSaga)
  yield takeEvery(FETCH_USERS, loadPeoples)
  yield takeEvery(FETCH_USER_DETAIL, loadPeopleDetails)
}
