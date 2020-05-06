import styled from '@emotion/styled'
import PageHead from './PageHead'

/*==============================================================================
  # Styles
==============================================================================*/

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
  min-height: 100vh;
`

/*==============================================================================
  # Componet
==============================================================================*/

const Layout = ({ children }) => (
  <main>
    <PageHead />
    <Wrapper>
    	{children}
    </Wrapper>
    <style global jsx>{`
      body {
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
  </main>
)

export default Layout