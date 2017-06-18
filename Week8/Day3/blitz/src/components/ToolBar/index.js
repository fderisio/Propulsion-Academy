import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './style.css';

export default class FeedBlitzToolbar extends React.Component {

  render() {
    //console.log('toolbar props', this.props)
    return (
      <Toolbar style= { { 'height': '30px', 'backgroundColor': 'white' } }>
        <ToolbarGroup>
          <FontIcon className="muidocs-icon-custom-sort" />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Edit Blitz" className='MenuItem' />
            <MenuItem primaryText="Delete Blitz" onClick={this.props.deleteBlitz} className='MenuItem' />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}