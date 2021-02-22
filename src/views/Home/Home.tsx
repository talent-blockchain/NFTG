import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
<<<<<<< HEAD
        title="MasterChef is Ready"
        subtitle="Stake Uniswap LP tokens to claim your very own yummy SUSHI!"
=======
        title="Decentralized Auction House"
        subtitle="The NFT Gallery auctions original 1st Edition NFTs from a wide range of verified artists"
>>>>>>> master
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
<<<<<<< HEAD
        🏆<b>Pro Tip</b>: SUSHI-ETH UNI-V2 LP token pool yields TWICE more token
        rewards per block.
=======
        <p>Stake Uniswap LP tokens to earn NFTG!</p>
        {/* 🖼<b>Pro Tip</b>: NFTG-ETH UNI-V2 LP token pool yields TWICE more token
        rewards per block. */}
>>>>>>> master
      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
<<<<<<< HEAD
        <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
=======
        <Button text="🖼️ See the Menu" to="/farms" variant="secondary" />
>>>>>>> master
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
<<<<<<< HEAD
  font-size: 16px;
=======
  font-size: 18px;
>>>>>>> master
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
