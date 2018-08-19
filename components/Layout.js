import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head'; // components added to move to head tag

export default ({ children }) => (
  <Container>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
      />
    </Head>

    <Header />
    {children}
  </Container>
);
