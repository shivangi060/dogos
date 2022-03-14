
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navbar from "./components/Navbar"

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Switch>
     <Route></Route>
     {/* <Route path="/" exact component={HOME}></Route>
     <Route path="/market"  component={Market}></Route>
     <Route path="/usd"  component={Usd}></Route>
     <Route path="/dogos"  component={Dogos}></Route>
     <Route path="/connect"  component={Connect}></Route> */}
     {/* <Route path="/"  component={Home}></Route>
     <Route path="/"  component={Home}></Route>
     <Route path="/"  component={Home}></Route>
     <Route path="/"  component={Home}></Route> */}
    
   </Switch>
   </BrowserRouter>
   
   </>
  );
}

export default App;
