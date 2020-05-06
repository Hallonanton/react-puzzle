import styled from '@emotion/styled'
import PageHead from './PageHead'

/*==============================================================================
  # Styles
==============================================================================*/

const Wrapper = styled('div')`
	background: red;
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
  </main>
)

export default Layout