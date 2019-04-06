import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(580px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        // titleTemplate="%s - Stephen Karpinskyj"
        defaultTitle="Stephen Karpinskyj"
      >
        <meta name="description" content="Stephen Karpinskyj" />
      </Helmet>
      <Header />
      <Switch>
        <Route path="" component={HomePage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
