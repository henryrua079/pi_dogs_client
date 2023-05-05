import './App.css';
import React, { useEffect, useState } from 'react';
import { Home, Login, Form, Detail, Not, MyDogs, FormUser } from './views'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTemperaments, getDogs } from './Redux/actions';
import PrivateRoute from './ProtectRoutes/PrivateRoute';


function App() {


  const [access, setAccess] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());
  }, [dispatch]);


  return (
    <BrowserRouter>
      {/* <Switch> */}

        <div className="App">

          <Route exact path='/'>
            <Login setAccess={setAccess}></Login>
          </Route>

          <Route exact path='/register'>
            <FormUser access={access}
              setAccess={setAccess}></FormUser>
          </Route>

          <PrivateRoute exact path='/create' access={access} >
            <Form setAccess={setAccess} />
          </PrivateRoute>

          <PrivateRoute exact path='/home' access={access} >
            <Home setAccess={setAccess} />
          </PrivateRoute>

          <PrivateRoute exact path='/mydogs' access={access} >
            <MyDogs setAccess={setAccess} />
          </PrivateRoute>

          <PrivateRoute path="/detail/:id" access={access} >
            <Detail setAccess={setAccess} />
          </PrivateRoute>

          <Route path="*" render={() => <Redirect to={<Not />} />} />

        </div>

      {/* </Switch> */}
    </BrowserRouter>


  );
}

export default App;
