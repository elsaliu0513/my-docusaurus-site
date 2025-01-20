import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to ExampleDoc</h1>
        <p>This is a custom homepage for your documentation site.</p>
        <a href="/clients">Go to Clients Documentation</a>
      </div>
    </Layout>
  );
}
