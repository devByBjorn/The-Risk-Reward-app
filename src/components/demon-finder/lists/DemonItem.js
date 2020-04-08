import React from 'react'
import Board from '../board/DemonFinderBoard'
import { NavLink } from 'react-router-dom'
import { EditIcon, TrashIcon } from '../../../icons/IconsComponents'
import Btn from '../../utilities/Btn'


const Demon = ({ title, id, deleteDemon }) => (
  <div>
    <li key={id} className="demon"
    >
      <NavLink to={`/edit-demon/${id}`}>{title}</NavLink>
      <Btn
        onClick={() => deleteDemon({ id })}
        text={<TrashIcon />}
      />
      <NavLink to={`/edit-demon/${id}`}>
        <EditIcon />
      </NavLink>
    </li>
    <Board />
  </div>
)

export default Demon
