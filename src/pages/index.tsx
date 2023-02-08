import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Based in seoul</p>
      </section>
      <section>
        <Link href='/blogs'>Blog</Link>
        <Link href='/resume'>Resume</Link>
      </section>
    </Layout>
  )
}
