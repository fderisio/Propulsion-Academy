import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class LikesItem extends Component {

  render() {
    return (
        <Card expandable={false} >
          <CardHeader title="like" avatar="avatar"  subtitle="subtitle"/>,
          <CardText expandable={false}></CardText>,
          <CardActions>
            <FlatButton label="like" icon={<StarBorder color="black"/>} />
            <FlatButton label="unfollow" />
          </CardActions>,
        </Card>
    );
  }

}

export default LikesItem;