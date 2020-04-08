import React from 'react'
import { TextInput, Textarea } from '../../utilities/inputs'
import { SubmitBtn } from '../../utilities/Btn'

class DemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.demon ? props.demon.title : '',
      description: props.demon ? props.demon.description : '',
      management: props.demon ? props.demon.management : '',
      message: ''
    }
  }
  handleTextChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState(() => ({ [name]: value }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.title || !this.state.description || !this.state.management) {
      this.setState(() => ({ message: 'It\' important that you give your demon a proper title, a correct description and an idea about how to manage it. Don\'t cheat yourself by not taking your demons serious.' }))
    } else {
      this.setState(() => ({ message: '' }))
      this.props.handleSubmit({
        title: this.state.title,
        description: this.state.description,
        management: this.state.management,
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.message && <p>{this.state.message}</p>}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <TextInput
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleTextChange}
          />
          <div>
            <Textarea
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleTextChange}
            />
            <Textarea
              name="management"
              placeholder="management"
              value={this.state.management}
              onChange={this.handleTextChange}
            />
          </div>
          <SubmitBtn
            text="Add"
          />
        </form>
      </div>
    )
  }
}

export default DemonForm