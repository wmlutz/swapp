import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Header: AntHeader } = Layout;

const pages = [
  {
    url: '/',
    title: 'SW App Home'
  },{
    url: '/ships/',
    title: 'Ships'
  },{
    url: '/people/',
    title: 'People'
  },
]

function Header() {
  return (
    <AntHeader theme='light'>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        {pages.map((x, i) => 
          <Menu.Item key={i}>
            <Link to={x.url}>{x.title}</Link>
          </Menu.Item>
        )}
      </Menu>
    </AntHeader>
  )
}

export default Header