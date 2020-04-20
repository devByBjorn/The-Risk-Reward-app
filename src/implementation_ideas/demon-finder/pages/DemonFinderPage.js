import React from 'react'
import { NavLink } from 'react-router-dom'
import DemonList from '../lists/DemonList'

const DemonFinderPage = () => (
  <div>
    <h1>Demon Finder Page</h1>
    <NavLink to="/add-demon">Add Demon</NavLink>
    <DemonList />
  </div>
)

export default DemonFinderPage