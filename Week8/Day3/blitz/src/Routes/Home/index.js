import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFeed, postBlitz, deleteBlitz, fetchLikes } from '../../store/actions';
import Header from '../../components/Header';
import FeedItem from '../../components/FeedItem';
import Footer from '../../components/Footer';
import {Card, CardTitle} from 'material-ui/Card';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }

  componentWillMount = () => {
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

  deleteBlitz = (blitz) => {
    //const deleteAction = deleteBlitz(blitz);
    //this.props.dispatch(deleteAction);
  }

  like = (blitzId) => {
    this.props.dispatch(fetchLikes(blitzId));
  }

  render() {
    // if there are no feeds yet
    if (this.props.feed.length === 0) {
      return <p> Loading home page... </p>
    }

    const username = this.props.currentUser.username;
    const feed = this.props.feed;
    feed.sort(function(a,b) {return (a.created_at > b.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0);} );
    
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
              { feed.map((feedItem, index) => <FeedItem 
                key={index} feedItem={feedItem} currentUser={username} deleteBlitz={ this.deleteBlitz } 
                fetchLikes={ this.like }/>)}
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

// mapDispatchToProps --> to pass dispatch()

export default connect(mapStateToProps)(Home);

          