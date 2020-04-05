import React, { Component } from 'react'
import moment from 'moment'
import { TextInput } from '../utilities/inputs'

item = {
  market: props.item ? props.item.market : '',
  bias: props.item ? props.item.bias : '',
  levelsToBuy: props.item ? props.item.levelsToBuy : '',
  levelsToSell: props.item ? props.item.levelsToSell : '',
  date: props.item ? props.item.date : moment()
}

const WatchListForm = () => {
  return (
    <form>
      <label>Market</label>
      <TextInput
        name="market"
        onChange={this.onChangeText}
      />
      <label>Bias</label>
      <TextInput
        name="bias"
        onChange={this.onChangeText}
      />
      <label>Levels to Buy</label>
      <TextInput
        name="levelsToBuy"
        onChange={this.onChangeValue}
      />
      <label>Levels To Sell</label>
      <TextInput
        name="levelsToSell"
        onChange={this.onChangeValue}
      />
    </form>
  )
}

export default WatchListForm
