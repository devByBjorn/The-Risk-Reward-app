import React from 'react'

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
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleTextChange}
          />
          <div>
            <textarea
              type="text"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleTextChange}
            />
            <textarea
              type="text"
              name="management"
              placeholder="management"
              value={this.state.management}
              onChange={this.handleTextChange}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default DemonForm