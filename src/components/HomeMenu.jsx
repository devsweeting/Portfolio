import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';


const MenuWrapper = styled.section`
  position: relative;
  top: 10em;
  left: 90%;
`;

const MenuButton = {
  backgroundColor: 'black',
  color: 'white',
  border: 'white solid 1px',
  padding: '10px'
}

  
class HomeMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <MenuWrapper>
        <Button style={MenuButton}
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Hit Me Up
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Resume</MenuItem>
          <MenuItem onClick={this.handleClose}>Email</MenuItem>
          <MenuItem onClick={this.handleClose}>Github</MenuItem>
        </Menu>
      </MenuWrapper>
    );
  }
}

export default HomeMenu;