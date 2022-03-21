import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FETCH_USERS } from "../redux/reducers/people/types"
import PeoplePagination from "./PeoplePagination"

export default function PeopleTable() {
   const people = useSelector((s) => s.people)
   const dispatch = useDispatch()

   const changePageHandler = (page) =>
      dispatch({
         type: FETCH_USERS,
         payload: {
            page,
            search: people.search,
         },
      })

   const search = (e) =>
      dispatch({
         type: FETCH_USERS,
         payload: {
            page: 1,
            search: e.target.value,
         },
      })

   return (
      <div className="App">
         <form style={{ display: "inline-block" }}>
            <input
               style={{
                  width: 600,
                  marginTop: 10,
                  marginLeft: 10,
                  marginBottom: 10,
                  padding: 6,
                  borderRadius: 10,
                  border: "1px solid #333",
                  boxShadow: "1px 1px 5px 3px rgba(24, 133, 217, 0.24)",
                  fontSize: 14,
               }}
               type={"text"}
               onChange={search}
               value={people.search}
            />
         </form>
         {people.loading ? (
            <div>Loading...</div>
         ) : (
            <>
               <table border={1} width="100%" cellPadding={6} cellSpacing={0}>
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Birth year</th>
                        <th>Eye color</th>
                        <th>Gender</th>
                        <th>Hair color</th>
                        <th>Height</th>
                        <th>Details</th>
                     </tr>
                  </thead>
                  <tbody>
                     {people?.data?.results.map((character) => {
                        const id = character.url.replaceAll(/\D/g, "")

                        return (
                           <tr key={character.name}>
                              <td>{character.name}</td>
                              <td>{character.birth_year}</td>
                              <td>{character.eye_color}</td>
                              <td>{character.gender}</td>
                              <td>{character.hair_color}</td>
                              <td>{character.height}</td>
                              <td>
                                 <Link to={`/people/${id}`}>Details</Link>
                              </td>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
               <PeoplePagination
                  page={people.page}
                  total={people.data?.count || 0}
                  onChange={changePageHandler}
               />
            </>
         )}
      </div>
   )
}
