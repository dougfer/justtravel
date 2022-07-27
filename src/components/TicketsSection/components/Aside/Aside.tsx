import React from 'react'
import { Divider, Layout, Typography } from 'antd'
import Styles from './Aside.module.scss'
import { PriceSection, StarsSecion } from './components'

export const Aside: React.FC = () => {

  const { Sider } = Layout

  return (
    <Sider className={Styles.container} width={370}>
      <Typography className={Styles.title}>Filtro</Typography>
      <Divider />
      <PriceSection />
      <Divider style={{ marginTop: '24px', marginBottom: '24px' }} />
      <StarsSecion />
    </Sider>
  )
}
