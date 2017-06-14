import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginCreator, fetchFeedCreator } from '../../store/actions';
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
  }

  handlePassword = (e) => {
    const password = e.currentTarget.value;
    this.setState({ password });
  }

  login = (e) => {
    e.preventDefault();
    const loginAction = loginCreator(this.state.email, this.state.password);
    this.props.dispatch(loginAction);
  }

  fetchFeed = (e) => {
    e.preventDefault();
    const fetchFeedAction = fetchFeedCreator();
    this.props.dispatch(fetchFeedAction);
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
        <RaisedButton type="submit" onClick={ this.fetchFeed } label="Fetch Feed" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Login);

// <input type="submit" onClick={ this.login } />
//<input type="text" placeholder="E-mail" onChange={ this.handleEmail }/><br/>
//          <input type="password" placeholder="Password" onChange={this.handlePassword }/><br/>
