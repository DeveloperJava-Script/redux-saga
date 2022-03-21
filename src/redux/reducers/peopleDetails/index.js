import {
  FETCH_USER_DETAIL,
  FETCH_USER_DETAIL_FAILURE,
  FETCH_USER_DETAIL_SUCCESS,
} from "./types"

const initialDetailsState = {
  data: null,
  error: null,
  loading: false,
}

export default function userDetailsReducer(
  state = initialDetailsState,
  action
) {
  switch (action.type) {
    case FETCH_USER_DETAIL: {
      return {
        ...state,
        loading: true,
      }
    }

    case FETCH_USER_DETAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      }
    }

    case FETCH_USER_DETAIL_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }

    default:
      return state
  }
}
