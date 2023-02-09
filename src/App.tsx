import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <>
      <BrowserRouter>
        <CyclesContextProvider>
          <ThemeProvider theme={defaultTheme}>
            <Router />
            <GlobalStyle />
          </ThemeProvider>
        </CyclesContextProvider>
      </BrowserRouter>
    </>
  )
}
