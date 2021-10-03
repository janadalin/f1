import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import PageSeason from 'pages/Season/Season';
import PageSchedule from 'pages/Schedule/Schedule';
import DetailCard from 'components/Detail/Card/Card';
import QualifyingSearch from 'components/Qualifying/Search/Search';
import ResultSearch from 'components/Result/Search/Search';
import ConstructorStandingSearch from 'components/Constructor/Standing/Search/Search';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const routes = [
  {
    path: '/',
    component: PageSeason,
  },
  {
    path: '/schedule/:season',
    component: PageSchedule,
  },
  {
    path: '/details',
    component: DetailCard
  },
];

const App = () => {
  return(
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Header>
            <Space>
              <Title type='success' level={1}>F1</Title>
              <Text type='success'>Racing</Text>
            </Space>
          </Header>
          <Content>
            <div className='layout-content'>
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                ))}              
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#000' }}>
            <Text type='success'>Font: Ergast Developer API</Text>
          </Footer>
        </Layout>
        </Router>
    </>
  );
};

export default App;
