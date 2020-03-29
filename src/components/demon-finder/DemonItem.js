import React from 'react'
import Board from './DemonFinderBoard'
import { NavLink } from 'react-router-dom'

const Demon = ({ title, id }) => (
  <div>
    <li
      key={id}
      className="demon"
    ><NavLink to={`/edit-demon/${id}`}>{title}</NavLink>
    </li>
    <Board />

  </div>
)

export default Demon
