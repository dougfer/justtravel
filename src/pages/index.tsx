import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Divider, Layout } from 'antd'
import { Header, MorePackagesSection, TicketsSection, BrazilDestinationsSection, JustTravelInfo, Footer } from 'src/components'
import 'react-lazy-load-image-component/src/effects/blur.css'
const Home: NextPage = () => {

  const { Footer: AntdFooter, Content } = Layout

  return (
    <>
      <Head>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <title>Home</title>
      </Head>
      <Layout>
        <Header />
        <Content>
          <Divider style={{ margin: 0 }} />
          <TicketsSection />
          <MorePackagesSection />
          <BrazilDestinationsSection />
        </Content>
        <AntdFooter style={{ padding: 0 }}>
          <JustTravelInfo />
          <Footer />
        </AntdFooter>
      </Layout>
    </>
  )
}

export default Home
