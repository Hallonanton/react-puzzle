import styled from '@emotion/styled'
import PageHead from './PageHead'
import Github from '../svg/github.svg'

/*==============================================================================
  # Styles
==============================================================================*/

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	width: 100%;
  padding: 0px 15px;
  min-height: 100vh;
  box-sizing: border-box;
`

const Link = styled('a')`
  position: fixed;
  bottom: 15px;
  right: 15px;

  svg {
    width: 20px;
    height: 20px;
  }
`


/*==============================================================================
  # Componet
==============================================================================*/

const Layout = ({ children }) => (
  <main>
    <PageHead />
    <Wrapper>
    	{children}
      <Link href="https://github.com/Hallonanton/react-puzzle" target="_blank" rel="noopener noreffer">
        <Github />
      </Link>
    </Wrapper>
    <style global jsx>{`
      :root {
        --main-bg-color: #f4f6f9;
        --secondary-bg-color: #fff;
        --main-text-color: #000;
        --main-box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        --btn-color: #fff;
        --btn-bg: linear-gradient(#ff8e59, #ffb153);
      }

      body {
        color: var(--main-text-color);
        background-color: var(--main-bg-color);
        font-family: 'Open Sans', sans-serif;
      }

      html, body, #__next, main {
        padding: 0px;
        margin: 0px;
        min-height: 100vh;
      }

    `}</style>
  </main>
)

export default Layout