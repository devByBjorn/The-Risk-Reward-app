import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DemonFinderForm from '../components/demon-finder/DemonFinderForm'
import { editDemon, deleteDemon } from '../actions/demonActions'
import { TrashIcon } from './table/TradeTableIcons'

const EditDemonPage = (props) => (
  <div>
    <h1>Edit/Read Demon Page</h1>
    <NavLink to="/demons">Back to demon list</NavLink>
    <DemonFinderForm
      demon={props.demon}
      handleSubmit={(demon) => {
        props.dispatch(editDemon(props.demon.id, demon))
        props.history.push('/demons')
      }}
    />
    <button
      onClick={() => {
        const { id } = props.demon
        props.dispatch(deleteDemon({ id }))
        props.history.push('/demons')
      }}
    >
      <TrashIcon />
    </button>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    demon: state.demons.find((demon) => demon.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditDemonPage)