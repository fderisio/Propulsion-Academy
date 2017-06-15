import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class FeedItem extends Component {

  getFeedAge = () => {
  }

  render() {
    const feed = this.props.feedItem;
    const feedAuthor = this.props.feedItem._user;
    const feedCreation = this.props.feedItem.created_at;
    const time = Math.floor(((new Date().getTime() - new Date(feedCreation))/ (1000*60*60*24))) + " days";

    //console.log(feed)
    return (
        <Card
        expandable={false}
        >
          <CardHeader title={ feedAuthor.username } avatar={ feedAuthor.avatar }  subtitle={ time }/>,
          <CardText expandable={false}>{ feed.content }</CardText>,
          <CardActions>
            <FlatButton label="Like" icon={<StarBorder color="black"/>} />
            <FlatButton label="unfollow" />
          </CardActions>,
        </Card>
    );
  }

}

export default FeedItem;

// <CardMedia
//             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//           >
          //   <img src="images/nature-600-337.jpg" alt="" />
          // </CardMedia>,
          // <CardTitle title="Card title" subtitle="Card subtitle" />,