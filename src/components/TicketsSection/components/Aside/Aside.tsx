import React from 'react'
import { Divider as AntdDivider, Layout, Typography } from 'antd'
import Styles from './Aside.module.scss'
import { PriceSection, StarsSecion, Convenience, PropertyTypes } from './components'

export const Aside: React.FC = () => {

  const { Sider } = Layout

  const Divider = () => <AntdDivider style={{ marginTop: '24px', marginBottom: '24px' }} />

  return (
    <Sider className={Styles.container} width={370}>
      <Typography className={Styles.title}>Filtro</Typography>
        <Divider />
      <PriceSection />
        <Divider />
      <StarsSecion />
        <Divider />
      <Convenience />
        <Divider />
      <PropertyTypes />
    </Sider>
  )
}
