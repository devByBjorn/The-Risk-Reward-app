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
        <SubHeading fontSize="5rem">Welcome.</SubHeading>
        <Paragraph lineHeight={1.5}><Span display="inline" fontWeight="bold">The market is a tuff place for a trader just starting out</Span>. One of the biggest issues for many new trades is undercapitalization. A small account size can make it hard to take the game serious, and lack of seriousness can easily lead you to blidly take too much risk. This often leads to another blown trading account.
        </Paragraph>
        <Paragraph lineHeight={1.5}>This can be avoided if you follow the process presented below. The process is especially suitable if you are trying to grow a small amount of money and do not have the luxury of risking only 0.5% - 1%, or even 2%, of your account. The two keystones of the process is; logging trades and comparing stats (a great deal of patience is needed too).</Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <SubHeading>Trades</SubHeading>
        <Paragraph lineHeight={1.5}>
          The Trades page lets you log your trades and displays all your logged trades in form of tables. As of now you can log three types of trades; Closed, Active and Pending. Closed trades are just that, trades that have been executed and closed. Active trades have been executed but not yet closed. Pending trades are usually limit orders still waiting to get hit.
        </Paragraph>

        <SubHeading>Stats</SubHeading>
        <Paragraph lineHeight={1.5}>
          Under the Stats page you have two lists; one with stats based on total trades, such as wins, losses ad win ratio, and another with stats based on R, such as total, highest, lowest and average R.
        </Paragraph>
        <Paragraph lineHeight={1.5}>
          You will also find two tables, and here is where the magic lies. One table shows specific stats based on setups and the other shows the same stats based on markets. By looking at the tables, side by side, you can easily see which setups that are delivering your highest win rate and generates highest R, and which market that is your best performing one.
    </Paragraph>
        <Paragraph lineHeight={1.5}>
          With this knowledge you should focus on only trading your highest probability setups in your best performing market, and really push those trades. Rember that you will need a good amount of trades before you can draw any conclusions based on the statistics.
    </Paragraph>
      </ContentWrapper>

    </FlexContainer>
  </PageMainContainter>
)

export default EdgePusherPage