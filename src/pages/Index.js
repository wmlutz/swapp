import React from 'react';
import { Layout } from 'antd';
import { Link } from "react-router-dom";
const { Content } = Layout;

const pages = [
  {
    url: '/ships/',
    title: 'Ships'
  },{
    url: '/people/',
    title: 'People'
  },
]

function Index() {
  return (
    <Content>
      <h2>Welcome to the SW App</h2>
      {pages.map((x, i) => <p><Link to={x.url} key={i}>{x.title}</Link></p>)}
    </Content>
  );
}

export default Index;
