import React from 'react'
import PageMainContainter from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import Paragraph from '../components_style/Paragraph'
import { SubHeading } from '../components_style/Headings'
import { ContentWrapper } from '../components_style/ContentWrapperStyled'
import Span from '../components_style/Span'

const EdgePusherPage = () => (
  <PageMainContainter>
    <FlexContainer alignItems="center" flexDirection="column" justifyContent="center">
      <ContentWrapper>
        <SubHeading fontSize="5rem">Welcome<Span color="#f50057" display="inline">.</Span></SubHeading>
        <Paragraph ><Span display="inline" fontWeight="bold">To know your edge is of great importance when it comes to trading. EdgePusher aims to help you identify your true edge in the market, so you can make sure to always put in the effort where it counts.</Span>
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
          To log the Closed trades is vital while logging Active and Pending trades is optional, though recommended, since it gives you clear overview of how much risk you are exposed to.
        </Paragraph>


        <SubHeading><Span color="#f50057" display="inline">Stats</Span></SubHeading>
        <Paragraph >
          Under the Stats page you have two lists and two tables. The first list gives you an overview of stats related to total trades, such as wins, losses and win ratio. The second list is focused on stats related to Risk-reward; best Reward, worst Risk, and Risk-Reward ratio.
        </Paragraph>
        <Paragraph>
          Then you have the tables, and here is where the magic lies. One table shows specific stats based on setups and the other shows the same stats based on markets. The idea is that you should compare the tables and identify your setups with the highest win rate and your best performing market. With this knowledge you can focus on your highest probability setups in your best performing market, and really push those trades.
    </Paragraph>
        <Paragraph>
          Ps: Remember, you will need a good amount of trades before you can draw any conclusions based on the statistics.
    </Paragraph>

        <Paragraph>
          Happy logging,
    <Span fontWeight="normal">EdgePusher team</Span>
        </Paragraph>
      </ContentWrapper>

    </FlexContainer>
  </PageMainContainter>
)

export default EdgePusherPage