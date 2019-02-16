import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import resume from '../assets/resume.svg';
import email from '../assets/email.svg';
import github from '../assets/github.svg';


const BottomNavStyle = {
  backgroundColor: 'black'
}

const iconStyles = {
  color: 'white'
}

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };
  

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} style={BottomNavStyle}>
        <BottomNavigationAction label="Recents" value="recents" style={iconStyles} icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" style={iconStyles} icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" style={iconStyles} icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" style={iconStyles} icon={<Icon>folder</Icon>} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LabelBottomNavigation;
