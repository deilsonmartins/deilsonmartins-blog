import React from 'react';

import Header from '../Header';

import Footer from '../Footer';

import {Wrapper, Main} from './styles';

import GlobalStyle from '../../styles/global';

export default function Layout({children}) {
  return (
    <Wrapper>
      <GlobalStyle/>
      <Header/>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}