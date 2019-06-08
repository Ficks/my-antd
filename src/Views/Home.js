import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setUserInfo} from '../Store/Actions/user_action';

import './Home.less';

import Sider from '../Components/Menu';
import Header from '../Components/Header';
class Home extends Component {
  constructor (props) {
    super (props);
  }
  state = {
    collapsed: false,
  };

  switchCollspsed = status => {
    this.setState ({collapsed: !this.state.collapsed});
  };

  render () {
    return (
      <div className="wrap">
        <Sider inlineCollapsed={this.state.collapsed} />
        <div className="wrap-right">
          <Header
            collapsed={this.state.collapsed}
            switchCollspsed={this.switchCollspsed}
          />
        </div>
      </div>
    );
  }
}

var mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
  };
};
var mapDispatchToProps = {
  setUserInfo,
};

var HomeView = connect (mapStateToProps, null) (Home);

export default HomeView;
