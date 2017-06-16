import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

class NewBlitz extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }

  handleBlitz = (e) => {
    const content = e.currentTarget.value;
    this.setState({ content });
  };

  render() {
    //console.log(feed)
    return (
        <Card expandable={false} >
          <CardTitle title="What would you like to share?" subtitle="Tell us!" />
          <TextField hintText="Write your blitz here" multiLine={true} rows={2} rowsMax={4} onChange={ this.hendleBlitz }/>
          <br />
          <RaisedButton type="submit" label="Post" onClick={ this.postBlitz } />
        </Card>
    );
  }

}

export default NewBlitz;