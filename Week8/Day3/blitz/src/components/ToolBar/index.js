import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar } from 'material-ui/Toolbar';

const styles = {
  toolbar: {
    height: '30',
    backgroundColor: 'white',
    marginLeft: '350'
  },
  menuitem: {
    fontSize: '12'
  }
};

export default class FeedBlitzToolbar extends Component {

  render() {
    return (
      <Toolbar style= { styles.toolbar }>
          <IconMenu
            iconButtonElement={<IconButton touch={true}><NavigationExpandMoreIcon /></IconButton>}
          >
            <MenuItem primaryText="Edit Blitz" style={ styles.menuitem } />
            <MenuItem primaryText="Delete Blitz" style={ styles.menuitem } onClick={this.props.deleteBlitz} />
          </IconMenu>
      </Toolbar>
    );
  }
}

