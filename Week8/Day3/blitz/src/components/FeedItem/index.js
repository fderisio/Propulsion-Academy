import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FeedItem extends Component {

  render() {
    const feed = this.props.feedItem;
    const feedAuthor = this.props.feedItem._user;
    console.log(feed)
    return (
        <Card>
          <CardHeader title={ feedAuthor.username } avatar={ feedAuthor.avatar } />,
          <CardText>{ feed.content }</CardText>,
          <CardActions>
            <FlatButton label="Like" />
            <FlatButton label="unfollow" />
          </CardActions>,
        </Card>
    );
  }

}

export default FeedItem;
 //subtitle="Subtitle"
// <CardMedia
//             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//           >
          //   <img src="images/nature-600-337.jpg" alt="" />
          // </CardMedia>,
          // <CardTitle title="Card title" subtitle="Card subtitle" />,