import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ItemPreview from './ui/Item-preview';

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
      <Route path='/product-details/:productId'>
        <ItemPreview />
      </Route>
    </Switch>
  )
}

export default App;
