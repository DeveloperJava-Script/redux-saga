import { createStore, applyMiddleware } from "redux"
import createSagaMiddleWare from "redux-saga"
import { routerMiddleware } from "connected-react-router"
import reducer, { history } from "./reducers/reducer"
import rootSaga from "./sagas"

const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(
   reducer,
   applyMiddleware(routerMiddleware(history), sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga)

export default store
