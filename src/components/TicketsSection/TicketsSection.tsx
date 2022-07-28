import React from 'react'
import { Layout } from 'antd'
import { Aside, HeaderForm, TicketList } from './components'
import Styles from './TicketsSection.module.scss'

export const TicketsSection: React.FC = () => {
  const { Header, Sider, Content } = Layout

  return (
    <Layout>
      <HeaderForm />
      <Layout hasSider className={Styles.mainSection}>
        <Aside />
        <Content>
          <TicketList />
        </Content>
      </Layout>
    </Layout>
  )
}
