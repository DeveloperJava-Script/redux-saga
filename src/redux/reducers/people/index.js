import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./types"

const initial = {
   loading: false,
   page: 1,
   search: "",
   error: null,
   data: null,
}

export function peopleReducer(state = initial, action) {
   const { type, payload } = action

   switch (type) {
      case FETCH_USERS:
         const { page, search } = payload
         return { ...state, loading: true, search, page }
      case FETCH_USERS_SUCCESS:
         return { ...state, loading: false, data: payload }
      case FETCH_USERS_FAILURE:
         return { ...state, loading: false, error: payload }
      default:
         return state
   }
}
