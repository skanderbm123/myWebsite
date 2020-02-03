import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      
       <a href="#project" tabIndex={tabIndex}>
       <span aria-hidden="true">💁🏻‍♂️</span>
      Project
        </a>
      <a href="#work" tabIndex={tabIndex}>
        <span aria-hidden="true">📓</span>
      Work
        </a>
      <a href="#about" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
      Who am I
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;