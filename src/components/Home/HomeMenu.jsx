import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import menu from '../../assets/menu.svg';
import resume from '../../assets/resume.svg';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';

const MenuWrapper = styled.section`
  position: relative;
  top: 7em;
  left: 75%;
`;

const MenuButton = {
  backgroundColor: 'white',
  color: 'black',
  border: 'white solid 1px',
  borderRadius: '15px',
  padding: '10px'
}

const MenuImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 5px;
`;

const MenuDropImage = styled.img`
  height: 30px;
  width: 30px;
`;

  
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
        ><MenuImage src={menu}/>
          Feature in Production
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><MenuDropImage  src={resume}/>Resume</MenuItem>
          <MenuItem onClick={this.handleClose}><MenuDropImage  src={email}/>Email</MenuItem>
          <MenuItem onClick={this.handleClose}><MenuDropImage  src={github}/>Github</MenuItem>
        </Menu>
      </MenuWrapper>
    );
  }
}

export default HomeMenu;