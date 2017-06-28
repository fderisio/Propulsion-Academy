import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, fetchFeedCreator } from '../../store/actions';
import WelcomeHeader from '../../components/WelcomeHeader';
import Footer from '../../components/Footer';
import '../Home/style.css';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      user: '',
      password: '',
      passwordRepeat: '',
    }
  }

  handleFirstName = (e) => { this.setState({ firstaName: e.currentTarget.value }); };
  handleLastName = (e) => { this.setState({ lastaName: e.currentTarget.value }); };
  handleUser = (e) => { this.setState({ user: e.currentTarget.value }); };
  handlePassword = (e) => { this.setState({ password: e.currentTarget.value }); };
  handlePasswordRepeat = (e) => { this.setState({ passwordRepeat: e.currentTarget.value }); };

  createAccount = (e) => {
    e.preventDefault();
    // const loginAction = login(this.state.email, this.state.password);
    // this.props.dispatch(loginAction)

    //   // checks return of the loginAction
    //   .then((userSearch) => {
    //     if (userSearch === 'not found') {
    //       console.log('user not found')
    //     } else {
    //       this.props.history.push('/feed');
    //     }
    //   })
  };
  
  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <br/>
        <form>
          <TextField hintText="First Name" onChange={ this.handleLastName }/> <br />
          <TextField hintText="Last Name" onChange={ this.handleLastName }/> <br />
          <TextField hintText="User" onChange={ this.handleUser }/> <br />
          <TextField hintText="Password" floatingLabelText="Password" type="password" onChange={this.handlePassword }/><br />
          <TextField hintText="Enter your password again" floatingLabelText="Rewrite the password" type="password" onChange={this.handlePasswordRepeat }/><br /><br />
          <RaisedButton type="submit" label="Create Account" onClick={ this.createAccount } />
        </form><br/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(SignUp);
