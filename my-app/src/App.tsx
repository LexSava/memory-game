import React from 'react';
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
  <HashRouter>
    <Route exact path="/" component={Page} />
  </HashRouter>
);
export default App;
