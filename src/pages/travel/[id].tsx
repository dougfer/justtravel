import React from 'react'
import { Layout } from 'antd'
import { Header, MorePackagesSection, BrazilDestinationsSection, JustTravelInfo, Footer, DetailsContent } from 'src/components'


export default function TravelDetails() {


  
  const { Footer: AntdFooter, Content } = Layout


  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <DetailsContent />
          <MorePackagesSection />
          <BrazilDestinationsSection />
        </Layout>
        <AntdFooter style={{ padding: 0 }}>
          <JustTravelInfo />
          <Footer />
        </AntdFooter>
      </Layout>

    </>
  )
}
