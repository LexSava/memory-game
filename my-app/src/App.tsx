import React from 'react';
import { StylesProvider } from '@material-ui/core';
import { HashRouter, Route } from 'react-router-dom';
import Page from './components/Page/Page';
import './App.scss';

interface IApp {}

document.addEventListener(
  'dblclick',
  (event: MouseEvent) => {
    // alert('Double-click disabled!');
    event.preventDefault();
    event.stopPropagation();
  },
  true
);

const App: React.FC<IApp> = () => (
  <StylesProvider injectFirst>
    <HashRouter>
      <Route exact path="/" component={Page} />
    </HashRouter>
  </StylesProvider>
);
export default App;
