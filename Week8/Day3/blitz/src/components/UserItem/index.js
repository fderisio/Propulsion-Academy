import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class UserItem extends Component {

  constructor(props) {
    super(props);
    this.state={
      isFollowed: true
    }
  }
  render() {
    // extra variables
    const username = this.props.userItem.username;
    const userId = this.props.userItem._id;
    const avatar = this.props.userItem.avatar;
    const isFollowed = this.props.userItem.isFollowed;
    const followButton = (isFollowed) ? 

      <FlatButton label="Following" onClick={ () => this.props.unfollow(userId, isFollowed) }/> : 
      <FlatButton label="Follow" onClick={ () => this.props.follow(userId, isFollowed) }/>;

    console.log(isFollowed)

    return (
        <Card expandable={false} style={ { 'margin':'50px auto', 'width': '30%'} }>
          <CardHeader title={ username } avatar={ avatar }>{ followButton }</CardHeader>
        </Card>
    ); 
  }

}

export default UserItem;
