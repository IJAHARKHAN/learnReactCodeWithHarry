import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/NoteContext'

function About() {
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
                  <th>Address</th>
              </tr>
          </thead>
          <tbody>
              <td>{getContextVal.state.name}</td>
              <td>{getContextVal.state.mobile}</td>
              <td>{getContextVal.state.address}</td>
          </tbody>
      </table>
    )
  }


export default About