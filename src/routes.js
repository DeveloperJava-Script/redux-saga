import { Route, Routes, BrowserRouter } from "react-router-dom"
import App from "./pages/App"
import DetailPage from "./pages/DetailPage"

export const MAIN_ROUTE = "MAIN_ROUTE"
export const DETAIL_ROUTE = "DETAIL_ROUTE"

const routes = [
   {
      id: MAIN_ROUTE,
      path: "/",
      element: <App />,
      exact: true,
   },
   {
      id: DETAIL_ROUTE,
      path: "/people/:id",
      exact: true,
      element: <DetailPage />,
   },
]

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            {routes.map((route) => {
               const { id, ...rest } = route
               return <Route key={id} {...rest} />
            })}
         </Routes>
      </BrowserRouter>
   )
}
