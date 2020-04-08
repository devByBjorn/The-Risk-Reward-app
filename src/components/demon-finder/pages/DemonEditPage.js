import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DemonFinderForm from '../forms/DemonFinderForm'
import { editDemon, deleteDemon } from '../../../actions/demonActions'
import Btn from '../../../components/utilities/Btn'
import { TrashIcon } from '../../../icons/IconsComponents'

class EditDemonPage extends React.Component {
  handleAddEdit = (demon) => {
    const { id } = this.props.demon
    this.props.editDemon(id, demon)
    this.props.history.push('/demons')
  }
  handleDelete = () => {
    const { id } = this.props.demon
    this.props.deleteDemon({ id })
    this.props.history.push('/demons')
  }
  render() {
    return (
      <div>
        <h1>Edit/Read Demon Page</h1>
        <NavLink to="/demons">Back to demon list</NavLink>
        <DemonFinderForm
          demon={this.props.demon}
          handleSubmit={this.handleAddEdit}
        />
        <Btn
          text={<TrashIcon />}
          onClick={this.handleDelete}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  demon: state.demons.find((demon) => demon.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  editDemon: (id, demon) => dispatch(editDemon(id, demon)),
  deleteDemon: (id) => dispatch(deleteDemon(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditDemonPage)