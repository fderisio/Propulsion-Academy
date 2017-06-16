import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFeed, postBlitz } from '../../store/actions';

import Header from '../../components/Header';
import NewBlitz from '../../components/NewBlitz';
import FeedItem from '../../components/FeedItem';
import Footer from '../../components/Footer';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }

  componentDidMount = () => {
    this.props.dispatch(fetchFeed());
  }

  // EXTRA FUNCTION FOR OTHER COMPONENTS
  nextPage = (value) => { this.props.history.push(value); };

  // CREATING A BLITZ
  handleBlitz = (e) => {
    const content = e.currentTarget.value;
    this.setState({ content });
  };
  postBlitz = (e) => {
    e.preventDefault();
    const postAction = postBlitz(this.state.content);
    this.props.dispatch(postAction);
  }

  render() {
    const feed = this.props.feed;
    // if there are not feeds yet
    if (Object.keys(feed).length === 0) {
      return <p> Loading home page... </p>
    }
  
    // home display
    return (
      <div className="App">
        <Header nextPage = {this.nextPage} /><br/>
        <div className="Body">

          <Card expandable={false} >
            <CardTitle title="What would you like to share?" subtitle="Tell us!" />
            <TextField hintText="Write your blitz here" multiLine={true} rows={2} rowsMax={4} onChange={ this.handleBlitz }/>
            <RaisedButton type="submit" label="Post" onClick={ this.postBlitz } />
          </Card>

          <p className="Title">Check what you missed!</p><br/>
          <div>
              { feed.map((feedItem, index) => <FeedItem key={index} feedItem={feedItem} />)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Home);