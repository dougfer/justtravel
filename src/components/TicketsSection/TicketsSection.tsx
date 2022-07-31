import React from 'react'
import { Layout } from 'antd'
import { Aside, HeaderForm, TicketList } from './components'
import Styles from './TicketsSection.module.scss'

export const TicketsSection: React.FC = () => {
  const { Sider, Content } = Layout

  return (
    <Layout>
      <HeaderForm />
      <Layout hasSider className={Styles.mainSection}>
        <Sider width={370} style={{ backgroundColor: 'transparent' }}>
          <Aside />
        </Sider>
        <Content>
          <TicketList />
        </Content>
      </Layout>
    </Layout>
  )
}
