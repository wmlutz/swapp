import React from 'react';
import { Layout } from 'antd';
import ShipsIndex from '../components/ShipsIndex';
import { Route } from "react-router-dom";
import Ship from '../components/Ship';

const { Content } = Layout;

function Ships({match}) {
  return (
    <Content>
      <h1>Spaceships Page</h1>
      <ShipsIndex/>
      <Route path={`${match.path}:id`} component={Ship} />
    </Content>
  );
}

export default Ships;
