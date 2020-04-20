import React from 'react'
import { connect } from 'react-redux'
import { deleteDemon } from '../../../actions/demonActions'
import Demon from './DemonItem'

const DemonList = (props) => (
  <ul>
    {props.demons.map((demon) => (
      <Demon
        key={demon.id}
        {...demon}
        deleteDemon={props.deleteDemon}
      />
    ))}
  </ul>
)

const mapDispatchToProps = (dispatch) => ({
  deleteDemon: (id) => dispatch(deleteDemon(id))
})

const mapStateToProps = (state) => {
  return {
    demons: state.demons
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemonList)