import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import MnPlants from '../MnPlants/MnPlants';
import MyGarden from '../MyGarden/MyGarden/MyGarden';
import RegisterPage from '../RegisterPage';
import AboutPage from '../AboutPage/AboutPage';

import './App.css';
import BodyColor from '../BodyColor/BodyColor';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <div>
      <BodyColor color={'#AFA4F3'} />
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

            <ProtectedRoute exact path='/mnplants'>
              <MnPlants />
            </ProtectedRoute>

            <ProtectedRoute exact path="/mygarden">
              <MyGarden />
            </ProtectedRoute>

            <Route exact path="/login">
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to='/mnplants' />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route exact path="/registration" >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to='/mnplants' />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route exact path="/home">
              {user.id ?
                // If user is logged in, 
                // redirect them to /user page
                <Redirect to='/mnplants' />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
