import React from 'react'
import PageMainContainter from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import Paragraph from '../components_style/Paragraph'
import SubHeading from '../components_style/SubHeadingStyled'
import { ContentWrapper } from '../components_style/ContentWrapperStyled'
import Span from '../components_style/Span'

const EdgePusherPage = () => (
  <PageMainContainter>
    <FlexContainer alignItems="center" flexDirection="column" justifyContent="center">
      <ContentWrapper>
        <SubHeading fontSize="5rem">Welcome<Span color="#f50057" display="inline">.</Span></SubHeading>
        <Paragraph ><Span display="inline" fontWeight="bold">When it comes to trading knowing your edge is vital. EdgePusher aims to help you identify your true edge in the market, so you can stop putting on risk blindly and instead push your true edge fully.</Span>
        </Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <SubHeading><Span color="#f50057" display="inline">Trades</Span></SubHeading>
        <Paragraph >
          Logging trades is the foundation of finding your true edge in the market. The Trades page here at EdgePusher lets you log your trades and displays all of them in form of tables.
        </Paragraph>

        <Paragraph>
          As of now you can log three types of trades; Closed, Active and Pending. Closed trades are just that, trades that have been executed and closed. These are the trades that all statistics are based on. Active trades have also been executed but not yet closed, and Pending trades are usually limit orders still waiting to get filled.
        </Paragraph>

        <Paragraph>
          To log the Closed trades is vital while logging Active and Pending trades is optional, though recommended, since it helps you keep track of your current trades and gives you clear overview of how much risk you are potential exposed to.
        </Paragraph>

        <SubHeading><Span color="#f50057" display="inline">Stats</Span></SubHeading>
        <Paragraph >
          Under the Stats page you have two lists and two tables. The first list gives you an overview of stats related to total trades, such as wins, losses and win ratio. The second list is focused on stats related to *R or more specific R-multiple. You will find stats regarding best R, worst R, and your average R.
        </Paragraph>
        <Paragraph>Together these two lists give you a shallow snapshot of your overall performance.</Paragraph>
        <Paragraph>
          Then you have the tables, and here is where the magic lies. One table shows specific stats based on markets and the other shows the same stats based on setups. The idea is that you should compare the tables and identify your market with the highest win rate and then your setups with the highest win rate. With this knowledge you can focus on executing your highest probability setups in your best performing market, and really push those trades.
    </Paragraph>
        <Paragraph>
          Ps: Remember, you will need a good amount of trades before you can draw any conclusions based on the statistics.
    </Paragraph>

        <Paragraph>
          Happy logging,
    <Span fontWeight="normal">EdgePusher team</Span>
        </Paragraph>
        <Span fontSize="1.2rem" fontWeight="normal">*If you are not familiar with R and R-multiple read the pdf <a href="https://www.vantharp.com/trading/wp-content/uploads/2018/06/A_Short_Lesson_on_R_and_R-multiple.pdf" target="_blank" >A Short Lesson on R and R-multiple</a> from The Van Tharp Institute</Span>
      </ContentWrapper>

    </FlexContainer>
  </PageMainContainter>
)

export default EdgePusherPage