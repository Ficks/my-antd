import React, {Component} from 'react';
import {Icon} from 'antd';

class Header extends Component {
  render () {
    return (
      <header className="header">
        <span className="left-icon btn" onClick={this.props.switchCollspsed}>
          <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
      </header>
    );
  }
}

export default Header;
