### Pages 
  1. IndexPage - introduction of the page

  2. TradeTablePage - A table of all trades 
      Components: 
        //TradeTable 
          - (th) Market  Direction   R/R   Outcome  Open          Closed      Edit/delete
            (tr)  DAX      SHORT     2.1     W      2020-02-28    201-03-07

          - Initial state  
              TradeTable
                InitialTradeTabelState = []
              Filter/Sort
                What to show or in what order to show the table
                User should be able to sort by each heading
                  Actions: SORT_BY_R, SORT_BY_DIRECTION... and so on for each tabel heading
        

          - Button for Edit - redirects to EditTradePage with identified form 
              Action: EDIT_TRADE
          - Button for Delete - deletes identified trade row from the tabel  
              Action: DELETE_TRADE
        //NewTradeButton
          - Button that redirects the user to the AddTradePage  
              Action: ADD_TRADE 

      Actions 
        Filter
          SORT_BY_MARKET
          SORT_BY_DIRECTION
          SORT_BY_RR
          SORT_BY_OUTCOME
          SORT_BY_OPEN
          SORT_CLOSE

        Trades 
          ADD_TRADE
          EDIT_TRADE
          DELETE_TRADE

      Reducers 
        FilterReducer
        TradesReducer
        

  3. AddTradePage - A form to fill out, input values is what makes out the Trade Table
      Component: 
        // AddTradeForm 
            - A class with the state of all input values the user needs to fill out 
              {
                direction: '',
                market: '',
                entry: '',
                stop: '',
                target: '',
                open: moment,
                closed: moment,
              }

            - Render the intput values set by the user to th TradeTable 
            - Needs handleChange methods for each input value that sets state to the user input
            - Needs an setRiskReward method for calculating the risk reward by the help of 
              entry, stop, target state properties
            - Needs an onSubmit method that forms the output used in the tradeTabel, returns 
              {
                direction: direction
                market: market,
                open: open,
                closed: closed,
                riskReward: setRiskReward()
              }

         Action
          ADD_TRADE

  4. EditTradePage - Opens same form as above but for an already exsisting trade
        // EditTradeForm 
            - Uses the same form as in AddTradeForm but inital state is set to the values   
              identified trade to edit.

          Action
          EDIT_TRADE

  5. WhatIsRiskPage - Explination of the importance of R