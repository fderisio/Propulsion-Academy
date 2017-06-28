import React, { Component } from 'react';
import ToolBar from '../../components/ToolBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

class FeedItem extends Component {  

  render() {
    // extra variables
    const feed = this.props.feedItem;
    const feedAuthor = this.props.feedItem._user;
    const feedCreation = this.props.feedItem.created_at;
    const isLiked = this.props.feedItem.isLiked;
    // calculates feed age
    const time = Math.floor(((new Date().getTime() - new Date(feedCreation))/ (1000*60*60*24)));
    const feedAge =  (time > 1) ? time + " days ago" : (time === 1) ? time + " day ago" : "today";

    if (feedAuthor.username === this.props.currentUser) {
      return (
        <Card expandable={false} >
          <ToolBar deleteBlitz={() => this.props.deleteBlitz(feed)} />
          <CardHeader title={ feedAuthor.username } avatar={ feedAuthor.avatar }  subtitle={ feedAge }/>,
          <CardText expandable={false}>{ feed.content }</CardText>,
        </Card>
      );
    };
    
    return (
      <Card expandable={false} >
        <CardHeader title={ feedAuthor.username } avatar={ feedAuthor.avatar }  subtitle={ feedAge }/>,
        <CardText expandable={false}>{ feed.content }</CardText>,
        <Checkbox defaultChecked={isLiked}
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder onClick={ () => this.props.fetchLikes(feed._id) } />}
                  label="Like"
                  labelPosition="left"
                  style={ { 'fontSize': '11px', 'paddingBottom': '10px', 'marginLeft': '-20px', 'textAlign': 'right' } }
        />,
      </Card>
    ); 
  }

}

export default FeedItem;