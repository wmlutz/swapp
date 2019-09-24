import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

function Ship({match}) {
  return (
    <Content>
      <h1>Individual Ship</h1>
      <h3>Requested Ship: {match.params.id}</h3>
    </Content>
  );
}

export default Ship;
