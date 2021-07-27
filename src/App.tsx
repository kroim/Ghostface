import React from 'react';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Provider } from 'react-redux'
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';
import store from './state'

import GlobalStyle from './styles/global';
import { CustomGlobalStyles } from './styles/custom-global';
import dark from './styles/theme/dark';

import {getLibrary} from './utils/web3Provider';
const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK');

const App: React.FC = () => {
  const [theme,] = usePersistedState<DefaultTheme>('theme', dark);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <GlobalStyle />
              <CustomGlobalStyles />
              <Routes />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
};

export default App;
