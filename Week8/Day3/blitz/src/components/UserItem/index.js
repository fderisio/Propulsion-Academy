import React, { Component } from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class UserItem extends Component {

  constructor(props) {
    super(props);
    this.state={
      isFollowed: true
    }
  };

  render() {
    // extra variables
    const username = this.props.userItem.username;
    const userId = this.props.userItem._id;
    const avatar = this.props.userItem.avatar;
    const isFollowed = this.props.userItem.isFollowed;
  
    const followButton = (isFollowed) ? 
      <FlatButton label="Unfollow" onClick={ () => this.props.unfollow(userId, isFollowed) }/> : 
      <FlatButton label="Follow" onClick={ () => this.props.follow(userId, isFollowed) }/> ;

    return (
        <Card expandable={false} style={ { 'margin':'50px auto', 'width': '30%'} }>
          <CardHeader title={ username } avatar={ avatar }>{ followButton }</CardHeader>
        </Card>
    ); 
  }

}

export default UserItem;
