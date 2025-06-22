import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/NoteContext'

function Home() {
const getContextVal = useContext(NoteContext)

useEffect(() => {

  getContextVal.update()

}, [])


  return (
    <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
            </tr>
        </thead>
        <tbody>
            <td>{getContextVal.state.name}</td>
            <td>{getContextVal.state.mobile}</td>
        </tbody>
    </table>
  )
}

export default Home