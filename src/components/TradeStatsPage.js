import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import StatsListOutcome from './StatsListOutcome'
import StatsListR from './StatsListR'
import StatsTable from './StatsTable'
import PageMainContainter from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import { HorizontalLine } from '../components_style/LineBreak'
import Paragraph from '../components_style/Paragraph'
import { SubHeading } from '../components_style/Headings'

const TradeStatsPage = () => (
  <PageMainContainter>
    <FlexContainer
      alignItems="center"
      justifyContent="space-around"
      maxWidth="95vw"
    >
      <StatsListOutcome />
      <StatsListR />
    </FlexContainer>

    <FlexContainer justifyContent="center" maxWidth="95vw">
      <FlexContainer
        borderBottom="2px solid #eee"
        borderTop="2px solid #eee"
        direction="column"
        maxWidth="70rem"
        margin="15rem 1rem"
        padding="1rem 1rem 2rem 1rem"
      >
        <SubHeading>Know our edge and push it</SubHeading>
        <Paragraph lineHeight={1.5}><strong>As a trader it is crucial to identify where in the market your edge lies.</strong> Below you will find two tables; one shows specific stats based on setups and the other shows the same stats based on markets. By looking at the tables below you can easily see which setups that are delivering your highest winrate and which market that is your best performing one.
        </Paragraph>

        <Paragraph lineHeight={1.5}>
          With this knowledge you can focus on only trading your highest probablity setups in your best performing market, and really push those trades. This can especially be a good strategy if you are trying to grow a small amount of money and do not have the luxury of risking only 0.5% - 1%, or even 2%, of your account.
        </Paragraph>
      </FlexContainer>
    </FlexContainer>
    <FlexContainer
      alignItems="center"
      justifyContent="space-around"
      maxWidth="95vw"
    >
      <StatsTable useKey='setup' />
      <StatsTable useKey='market' />
    </FlexContainer>
  </PageMainContainter>
)

export default TradeStatsPage