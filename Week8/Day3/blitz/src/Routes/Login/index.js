import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, fetchFeedCreator } from '../../store/actions';
import WelcomeHeader from '../../components/WelcomeHeader';
import Footer from '../../components/Footer';
import '../Home/style.css';

import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = (e) => {
    const email = e.currentTarget.value;
    this.setState({ email });
  };
  handlePassword = (e) => {
    const password = e.currentTarget.value;
    this.setState({ password });
  };

  login = (e) => {
    e.preventDefault();
    const loginAction = login(this.state.email, this.state.password);
    this.props.dispatch(loginAction)

      // checks return of the loginAction
      .then((userSearch) => {
        if (userSearch === 'not found') {
          console.log('user not found')
        } else {
          this.props.history.push('/feed');
        }
      })
  };

  signup = (e) => {
    e.preventDefault();
    this.props.history.push('/signup');
  }
  
  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <br/>
        <form>
          <TextField hintText="E-mail" onChange={ this.handleEmail }/>
          <br />
          <TextField hintText="Password" floatingLabelText="Password" type="password" onChange={this.handlePassword }/>
          <br /><br /><br />
          <RaisedButton type="submit" onClick={ this.login } label="Sign In" />
        </form><br/>
        <RaisedButton type="submit" label="Sign Up" onClick= {this.signup }/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Login);
