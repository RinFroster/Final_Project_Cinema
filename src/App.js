import './App.css';
// Route
import {BrowserRouter, Switch } from 'react-router-dom';
import {routeHome} from './Route';
import HomeTemplate from "./Container/HomeTemplate";
// import AdminTemplate from "./Container/AdminTemplate";
import Loader from "./Component/Loader/index";

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
  // const showLayoutAdmin = (route) => {
  //   if(route && route.length > 0){
  //     return route.map((index,item)=>{
  //       return (
  //         <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
  //       )
  //     })
  //   }
  // }
  
  return (
    <BrowserRouter>
    <Loader />
      <Switch>
        {showLayoutHome(routeHome)}
        {/* {showLayoutAdmin(routeAdmin)} */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
