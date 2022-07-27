import React from 'react'
import { Layout } from 'antd'
import { Aside } from './components'
import Styles from './TicketsSection.module.scss'

export const TicketsSection: React.FC = () => {
  const { Header, Sider, Content } = Layout
  return (
    <Layout hasSider className={Styles.mainSection}>
      <Aside />
      <Content>
        oioioio
      </Content>
    </Layout>
  )
}