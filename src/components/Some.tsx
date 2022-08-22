import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Menu
        style={{ width: 256 }}
        mode='inline'
        expandIcon={<MenuOutlined />}
        // style={{ width: '100%' }}
      >
        <Menu.SubMenu key='sub1' title='Nav 1'>
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};

export default App;
