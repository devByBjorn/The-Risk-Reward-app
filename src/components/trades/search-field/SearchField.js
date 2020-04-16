import React from 'react'

const SearchField = (props) => {
  return (
    <div>
      <input
        className="text-field"
        type="text"
        {...props}
      />
    </div>
  )
}

export default SearchField