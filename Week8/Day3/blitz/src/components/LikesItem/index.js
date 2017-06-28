import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class LikesItem extends Component {

  render() {
    console.log(this.props)
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