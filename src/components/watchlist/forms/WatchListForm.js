import React, { useState, useContext } from 'react'
import WatchListContext from '../../contexts/WatchListContext'
import { TextInput, Textarea } from '../../utilities/inputs'

const WatchListForm = () => {
  const { dispatch } = useContext(WatchListContext)
  const [market, setMarket] = useState('')
  const [context, setContext] = useState('')
  const [buyAreas, setBuyAreas] = useState('')
  const [sellAreas, setSellAreas] = useState('')

  const addItem = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_ITEM',
      market,
      context,
      buyAreas,
      sellAreas,
    })
    setMarket('')
    setContext('')
    setBuyAreas('')
    setSellAreas('')
  }

  return (
    <form onSubmit={addItem}>
      <TextInput
        value={market}
        placeholder="market"
        onChange={(e) => setMarket(e.target.value)}
      />
      <br />
      <Textarea
        value={context}
        placeholder="context"
        onChange={(e) => setContext(e.target.value)}
      />
      <br />
      <TextInput
        value={buyAreas}
        placeholder="buy areas"
        onChange={(e) => setBuyAreas(e.target.value)}
      />

      <TextInput
        value={sellAreas}
        placeholder="sell areas"
        onChange={(e) => setSellAreas(e.target.value)}
      />
      <br />
      <button>Add</button>
    </form>
  )
}

export default WatchListForm
