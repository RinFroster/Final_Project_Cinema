import './App.css';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import {routeHome,routeCheckout,routeAdmin} from './Route';
import HomeTemplate from "./Container/HomeTemplate";
import CheckoutTemplate from "./Container/CheckoutTemplate";
import AdminTemplate from "./Container/AdminTemplate";
import Loader from "./Component/Loader/index";
import PageNotFound from "./Container/PageNotFound";

function App() {
  const showLayoutHome = (route) => {
    if(route && route.length >0){
      return route.map((item,index)=>{
        return (
          <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  const showLayoutCheckout = (route) => {
    if(route && route.length >0){
      return route.map((item,index)=>{
        return (
          <CheckoutTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  const showLayoutAdmin = (route) => {
    if(route && route.length > 0){
      return route.map((item, index)=>{
        return (
          <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  
  return (
    <BrowserRouter>
    <Loader />
      <Switch>
        {showLayoutHome(routeHome)}
        {showLayoutCheckout(routeCheckout)}
        {showLayoutAdmin(routeAdmin)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
