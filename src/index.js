import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "react-redux"
import store from "./redux"
import { history } from "./redux/reducers/reducer"
import { ConnectedRouter } from "connected-react-router"
import AppRoutes from "./routes"

ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
         <AppRoutes />
      </ConnectedRouter>
   </Provider>,
   document.getElementById("root")
)
