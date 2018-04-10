import React, { Component } from 'react';
import { RouteWithSubroutes } from './config/routes';
import { Container, Header, Nav, Main, Sidebar, Footer } from './layout/AppLayout';
import NavigationHead from './layout/navigation/NavigationHead';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <span>React-Saga-Express-Todo</span>
        </Header>

        <Nav>
          <NavigationHead>Navigation</NavigationHead>
        </Nav>

        <Main>
          {this.props.routes.map((route, i) => <RouteWithSubroutes key={i} {...route} />)}
        </Main>

        <Sidebar>
          blblb
        </Sidebar>

        <Footer>
          <span>Choose Theme</span>
        </Footer>
      </Container>
    );
  }
}

export default App;
