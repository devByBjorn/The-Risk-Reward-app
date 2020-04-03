import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addDemon } from '../../actions/demonActions'
import DemonFinderForm from '../demon-finder/DemonFinderForm'

class AddDemonPage extends React.Component {
  handleAddOnSubmit = (demon) => {
    this.props.addDemon(demon)
    this.props.history.push('/demons')
  }
  render() {
    return (
      <div>
        <h1>Add Demon Page</h1>
        <NavLink to="/demons">Back to demon list</NavLink>
        <div>
          <ol>
            <li>Give your demon suiting a title</li>
            <li>Think about your demon in terms of what,when,why,  how.
            <ul>
                <li>What makes the demon take over?</li>
                <li>When does this demon take over?</li>
                <li>Why...</li>
                <li>How can you manage this demon?</li>
              </ul>
            </li>
            <li>Write down your thoughts and process of managing this demon</li>
          </ol>
          <div>
            <h2>Demon</h2>
            <DemonFinderForm
              demon={this.props.demon}
              handleSubmit={this.handleAddOnSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDemon: (demon) => dispatch(addDemon(demon))
})

export default connect(null, mapDispatchToProps)(AddDemonPage)