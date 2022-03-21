import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { FETCH_USER_DETAIL } from "../redux/reducers/peopleDetails/types"

export default function DetailPage() {
  const people = useParams()
  const details = useSelector(s => s.peopleDetails)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: FETCH_USER_DETAIL,
      payload: people?.id,
    })
  }, [people])

  if (details.loading || details.data === null) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{details?.data.name}</h1>
      <h4>{details?.data.birth_year}</h4>
      <p>Skin: {details?.data.skin_color}</p>
      <p>Mass: {details?.data.mass}</p>
      <p>Eye_color: {details?.data.eye_color}</p>
    </div>
  )
}
