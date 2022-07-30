import React from 'react'
import { Space, Typography } from 'antd'
import BrazilLogo from 'src/assets/BrazilLogo.svg'
import Styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Typography>Copyright 2021 | Just Travel Travel Tech. All Rights Reserved.</Typography>
      <Space size='middle'>
        <Typography>Engineering made in BrazilBrazil</Typography>
        <BrazilLogo />
      </Space>
    </div>
  )
}
