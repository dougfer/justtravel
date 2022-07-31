import React, { useEffect } from 'react'
import { Divider, Layout, PageHeader, Space, Typography } from 'antd'
import { Header, MorePackagesSection, TicketsSection, BrazilDestinationsSection, JustTravelInfo, Footer, DetailsContent } from 'src/components'


export default function TravelDetails() {


  
  const { Footer: AntdFooter, Sider, Content } = Layout


  return (
    <>
      <Layout>
        <Header />
        <Content>
          <DetailsContent />
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
