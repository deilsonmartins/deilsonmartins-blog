import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import AboutPage from '../components/About';

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <AboutPage/>
    </Layout>

  );
}