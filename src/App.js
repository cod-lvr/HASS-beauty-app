import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ItemPreview from './pages/Item-preview';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about' exact>
        <About />
      </Route>
      <Route path='/shop' exact>
        <Shop />
      </Route>
      <Route path='/item-preview/:product-name' exact>
        <ItemPreview />
      </Route>
    </Switch>
  )
}

export default App;
