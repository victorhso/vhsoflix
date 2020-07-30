import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {
  BrowserRouter,// as Router,
  Switch,
  Route
  //Link
} from 'react-router-dom';

import cadastroVideo from './pages/cadastro/Video'
import cadastroCategoria from './pages/cadastro/Categoria';

const pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);