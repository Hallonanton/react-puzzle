import styled from '@emotion/styled'
import Layout from '../layout/Layout'
import PuzzleHandler from '../components/PuzzleHandler'

/*==============================================================================
  # Styles
==============================================================================*/

const Hero = styled('h1')`
	margin: 0px 0px 45px;
	text-transform: uppercase;
	font-size: 60px;
`


/*==============================================================================
  # Component
==============================================================================*/

const Home = () => (
  <Layout>
  	<Hero>Puzzle game</Hero>
    <PuzzleHandler />
  </Layout>
)

export default Home;