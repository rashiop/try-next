import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/layout';

export default function FirstPost () {
  return (
    <Layout>
      <Head>
        <title>First Post * Next.js Try</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="First Post" key="title" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
