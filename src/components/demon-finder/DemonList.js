import React from 'react'
import { connect } from 'react-redux'
import Demon from './DemonItem'

const DemonList = (props) => (
  <ul>
    {props.demons.map((demon) => (
      <Demon
        key={demon.id}
        {...demon}
      />
    ))}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    demons: state.demons
  }
}

export default connect(mapStateToProps)(DemonList)