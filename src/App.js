import React from 'react';
import Header from './components/Header';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'

import Index from '../src/pages/Index'
import Ships from './pages/Ships';
import People from './pages/People';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Header/>
        <Layout>
          <Content className='swContent'>
            <Route path="/" exact component={Index} />
            <Route path="/ships/" component={Ships} />
            <Route path="/people/" component={People} />
          </Content>
        </Layout>
      </Router>
    </Layout>
  );
}

export default App;
