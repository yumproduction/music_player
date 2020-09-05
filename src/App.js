import React from 'react';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

import './scss/components/common.scss'

import AlbumsContainer from './components/Albums/AlbumsContainer';
import { Route, Redirect, HashRouter } from 'react-router-dom';

function App() {
  return(
    <HashRouter>
        <Provider store = {store}>
        <Route exact path='/' render={() => <Redirect to={'/albums'} />} />
            <Route path='/albums' render={() => <AlbumsContainer />} />
    </Provider>
    </HashRouter>

  )
}

export default App;
