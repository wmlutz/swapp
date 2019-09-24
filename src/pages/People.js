import React from 'react';
import { Layout } from 'antd';
import PeopleIndex from '../components/PeopleIndex';
const { Content } = Layout;

function People() {
  return (
    <Content>
      <h1>People Page</h1>
      <PeopleIndex/>
    </Content>
  );
}

export default People;
