import React, { Component } from 'react'

const MainParentFormHeading = (props) => {
  return (

    <nav>
      <ul>
        <div className="init-nav">
          <li>
            <button
              name=''
              value={1}
              onClick={props.onClick}
            >Market and Direction</button>
          </li>
          <li>
            <button
              name=''
              value={2}
              onClick={props.onClick}
            >Stop, Entry, Target</button>
          </li>
          <li>
            <button
              name=''
              value={3}
              onClick={props.onClick}
            >Status</button>
          </li>
        </div>
        {
          props.status === 'closed' &&
          <div className="trade-closed-nav">
            <li>
              <button
                name="closed"
                value={4}
                onClick={props.onClick}
              >Outcome and Dates</button>
            </li>
            <li>
              <button
                name="closed"
                value={5}
                onClick={props.onClick}
              >Execution</button>
            </li>
            <li>
              <button
                name="closed"
                value={6}
                onClick={props.onClick}
              >Management</button></li>
            <li>
              <button
                name="closed"
                value={7}
                onClick={props.onClick}
              >Add Trade</button>
            </li>
          </div>
        }
        {/*
            props.status === 'active' &&
            <div className="trade-active-nav">
              <li>
                <button
                  value={}
                  onClick={props.onClick}
                >Market and Direction</button>
              </li>
              <li>
                <button
                  value={}
                  onClick={props.onClick}
                >Stop, Entry, Target</button>
              </li>
              <li>
                <button
                  value={}
                  onClick={props.onClick}
                >Status</button>
              </li>
            </div>
          }
          {props.status === 'pending' &&
            <div className="trade-pending-nav">
              <li>
                <button
                  value={}
                  onClick={props.onClick}
                >Market and Direction</button>
              </li>
              <li>
                <button
                  value={}
                  onClick={props.onClick}
                >Stop, Entry, Target</button>
              </li>
              <li>
                <button
                  value={}
                  onClick={props.onClick}
                >Status</button>
              </li>
            </div>
        */}
      </ul>
    </nav>

  )
}

export default MainParentFormHeading
