import React from 'react'
import Logo from 'src/assets/LightLogo.svg'
import Styles from './Header.module.scss'
import BrazilLogo from 'src/assets/BrazilLogo.svg'
import { formatToRealStr } from 'src/utils/formatToRealString'
import { Layout, Typography, Divider, Space } from 'antd'
import { QuestionCircleOutlined, UserOutlined } from '@ant-design/icons'

export const Header: React.FC = () => {
  const { Header: AntdHeader } = Layout
  return (
      <AntdHeader className={Styles.header}>
        <Logo /> {/*FIX ME LATER*/}
        <Space size='large' className={Styles.sideInformation}>
          <Typography>Cotação de hoje: {formatToRealStr(5.63)}</Typography>
          <BrazilLogo />
          <QuestionCircleOutlined style={{ fontSize: '24px' }} />
          <Divider type='vertical' style={{ backgroundColor: '#E7E9ED', width: '1px', height: '24px' }} />
          <UserOutlined style={{ fontSize: '24px' }} />
        </Space>
      </AntdHeader>
  )
}
