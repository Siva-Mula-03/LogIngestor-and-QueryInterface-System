import React, { Component } from 'react';
import {
  useNavigate,
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import Filter from '../Page/Filter';
import Footer from '../common/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: false,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated:false,
      currentUser: null
    }, () => {
      // Callback function that is executed after the state is updated
      this.props.history.push('/');
      Alert.success("You're safely logged out!");
    });
  }
  


  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated}/>
        </div>
        <div className="app-body">
      
        <Routes>

        <Route exact path="/" authenticated={this.state.authenticated}  element={<Home />} />
  
  <Route  path="/filter"  element={<Filter/>} /> 

  <Route
    path="/profile"
    element={
       
        <Profile  authenticated={this.state.authenticated}></Profile>
    
    }
  />

  <Route
    path="/login"
    element={<Login authenticated={this.state.authenticated} />}
  />

  <Route
    path="/signup"
    element={<Signup authenticated={this.state.authenticated} />}
  />

  <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />

  <Route path="*" element={<NotFound />} />

</Routes>

        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>

      
    );
  }
}

export default App;
