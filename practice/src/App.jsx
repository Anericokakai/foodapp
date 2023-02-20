

import {HeaderFunction }from "./components/HeaderComponent";
import { FoodContainer } from "./components/Foodcontainer";
import { HomeFucntion } from "./components/Homecomponent";
import { MenuFunction } from "./components/MenuComponent";
 import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import { Form } from "./components/FormComponent";
import { Offers } from "./components/OffersComponent";
function App() {
  return (
<Router>
 <div>
  <HeaderFunction></HeaderFunction>
 

  {/* route the links */}
  <Switch>
  <Route exact path={'/'}>

{/* render home page */}
<HomeFucntion></HomeFucntion>
<MenuFunction></MenuFunction>
<Offers></Offers>

  </Route>
  <Route exact path={'/menu'}>
    {/* render the menu page */}
<FoodContainer></FoodContainer>
  </Route>
  <Route exact path={'/formhandle'}>
    {/* rende the bills page */}
    <Form></Form>
  </Route>

  </Switch>


 </div>
 </Router>
    );
}

export default App;
