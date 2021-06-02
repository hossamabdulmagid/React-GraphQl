import './App.css';
import Mens from './component/mens/mens.component'
import Womens from './component/womens/womens.component'
import Sneakers from './component/sneakers/sneakers.component'
import Jackets from './component/jackets/jackets.component'
import Hats from './component/hats/hats.component'
import Collections from './component/collections/collections.component'
import { Switch, Route } from 'react-router-dom';
import Navs from './component/nav/nav.component'
const App = () => (
  <div className="">
    <Navs />
    <Switch>
      <Route exact path='/' component={Collections} />
      <Route path='/mens' component={Mens} />
      <Route path='/womens' component={Womens} />
      <Route path='/hats' component={Hats} />
      <Route path='/sneakers' component={Sneakers} />
      <Route path='/jackets' component={Jackets} />
    </Switch>
  </div>
);

export default App;