import React, {Component} from 'react';
import router from '../Router';
import {Menu, Icon} from 'antd';
const {SubMenu} = Menu;

class Sider extends Component {
  state = {
    current: 'user',
  };
  handleClick = e => {
    this.setState ({
      current: e.key,
    });
  };

  render () {
    return (
      <aside className="sider">
        <Menu
          inlineCollapsed={this.props.inlineCollapsed}
          theme="dark"
          mode="inline"
          onClick={this.handleClick}
          style={{width: this.props.inlineCollapsed ? '' : 256}}
          defaultOpenKeys={['user']}
          selectedKeys={[this.state.current]}
        >
          {router[0].children.map ((item, index) => {
            return (
              <Menu.Item key={item.name}>
                <Icon type={item.meta.icon} />
                <span>{item.meta.title}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </aside>
    );
  }
}

export default Sider;
