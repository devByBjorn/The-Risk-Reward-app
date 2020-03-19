import React from 'react'
import { connect } from 'react-redux'

const TradeEditPage = (props) => {
  console.log(props)
  return (
    <div>
      Trade Edit Page
    </div>
  )
}


export default connect()(TradeEditPage)