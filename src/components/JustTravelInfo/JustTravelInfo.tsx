import React from 'react'
import Styles from './JustTravelInfo.module.scss'
import NegativeLogo from 'src/assets/NegativeLogo.svg'
import { Space, Typography } from 'antd'
import { InstagramOutlined, LinkedinFilled } from '@ant-design/icons'

export const JustTravelInfo: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div>
        <NegativeLogo />
        <Typography className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit id consequat dignissim metus. Mi et aenean quam lacus, enim nunc. Enim pellentesque interdum dui, integer bibendum at id. Sed nisi, enim, eleifend duis arcu, orci nisl massa.
        </Typography>
        <Space>
          <LinkedinFilled style={{ fontSize: '22px', color: 'white' }} />
          <InstagramOutlined style={{ fontSize: '22px', color: 'white' }} />
        </Space>
      </div>
      <Space size={36} align='start'>
        <Space className={Styles.info} direction='vertical'>
          <Typography className={Styles.title}>Conheça</Typography>
          <Typography>Quem somos</Typography>
          <Typography>Trabalhe conosco</Typography>
          <Typography>Seja um parceiro</Typography>
        </Space>
        <Space className={Styles.info} direction='vertical'>
          <Typography className={Styles.title}>Viaje</Typography>
          <Typography>Pacotes</Typography>
          <Typography>Passagens</Typography>
          <Typography>Hotéis</Typography>
        </Space>
        <Space className={Styles.info} direction='vertical'>
          <Typography className={Styles.title}>Fale consoco</Typography>
          <Typography>Central de Ajuda</Typography>
          <Typography>Política de privacidade</Typography>
          <Typography>Política de cookies</Typography>
          <Typography>Termos de uso</Typography>
        </Space>
      </Space>
    </div>
  )
}
