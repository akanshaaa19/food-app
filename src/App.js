import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/ui/Navigation';
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import Contact from './components/pages/Contact';
import { Redirect } from 'react-router-dom';
import Admin from './components/pages/Admin';
import Category from './components/pages/Categories';
import CategoryPage from './components/pages/CategoryPage';
import AuthPage from './components/pages/AuthPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store';
import Checkout from './components/pages/Checkout';

function App() {

  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(authActions.check(token))  
  }, [])
  return (
    <div className="App" >
      <Navigation />

      <Route path='/'>
        <Redirect to='/home' />
      </Route>

      <Route path='/home' exact>
        <Home />
      </Route>

      <Route path='/cuisines' exact>
        <Category />
      </Route>

      <Route path='/contact' exact>
        <Checkout />
      </Route>

      <Route path='/admin' exact>
        <Admin />
      </Route>

      <Route path="/cuisines/:cuisine">
        <CategoryPage />
      </Route>

      <Route path='/auth' >
        <AuthPage />
      </Route>
    </div>
  );
}

export default App;
