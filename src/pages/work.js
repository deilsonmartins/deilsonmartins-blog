import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import WorkPage from '../components/Work';

export default function Work() {
  return (
    <Layout>
      <SEO title="Work" />
      <WorkPage/>
    </Layout>

  );
}