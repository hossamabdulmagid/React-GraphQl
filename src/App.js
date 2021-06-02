import './App.css';
import Mens from './component/mens/mens.component'
import Womens from './component/womens/womens.component'
import Sneakers from './component/sneakers/sneakers.component'
import Jackets from './component/jackets/jackets.component'
import Hats from './component/hats/hats.component'
const App = () => (
  <div className="">
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="">React and GraphQL -  Application</a>
    </nav>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <Mens />
        </div>
        <div className="col-sm-2">
          <Womens />
        </div>
        <div className="col-sm-2">
          <Sneakers />
        </div>
        <div className="col-sm-2">
          <Jackets />
        </div>
        <div className="col-sm-2">
          <Hats />
        </div>
      </div>
    </div>
  </div>
);

export default App;
