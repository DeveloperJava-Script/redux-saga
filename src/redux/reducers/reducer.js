import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { createBrowserHistory } from "history"
import { peopleReducer } from "./people"
import userDetailsReducer from "./peopleDetails"

export const history = createBrowserHistory()

const initial = {}

export function appReducer(state = initial, action) {
   return state
}

const reducer = combineReducers({
   app: appReducer,
   router: connectRouter(history),
   people: peopleReducer,
   peopleDetails: userDetailsReducer,
})

export default reducer
