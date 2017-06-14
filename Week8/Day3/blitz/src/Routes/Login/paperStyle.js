import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

const LoginForm = () => (
  <Paper zDepth={3}>
  		<TextField hintText="E-mail" onChange={ this.handleEmail }/>
	    <Divider />
        <TextField hintText="Password" floatingLabelText="Password" type="password" onChange={this.handlePassword }/>
	    <Divider />
  </Paper>
);

export default LoginForm;