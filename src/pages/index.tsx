import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Divider, Layout, PageHeader } from 'antd'
import { Header, MorePackagesSection, TicketsSection } from 'src/components'

const Home: NextPage = () => {

  const { Footer, Sider, Content } = Layout

  return (
    <Layout>
      <Header />
      <Content>
        <Divider style={{ margin: 0 }} />
        <TicketsSection />
        <MorePackagesSection />
      </Content>
      <div>Footer</div>
    </Layout>
  )
}

export default Home
