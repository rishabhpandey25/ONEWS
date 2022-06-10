import "antd/dist/antd.css";
import './App.css';
import Home from './components/Home';
import Business from "./components/Business"
import { Route, Switch } from "react-router-dom";
import Sports from "./components/Sports";
import Tech from "./components/Tech";


const App = () => {
   return (
     <>
     <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/business" exact>
          <Business />
        </Route>
        <Route path="/tech" exact>
          <Tech />
        </Route>
        <Route path="/sports" exact>
          <Sports />
        </Route>
      </Switch>
     </>
    
   )
}

export default App;



