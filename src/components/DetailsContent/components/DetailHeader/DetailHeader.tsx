import { EnvironmentOutlined, RollbackOutlined } from '@ant-design/icons'
import { Space, Typography, Layout } from 'antd'
import { transcode } from 'buffer'
import React from 'react'
import Styles from './DetailHeader.module.scss'

type DetailHeaderProps = {
  name: string
  location: string
  img: string
}

export const DetailHeader: React.FC<DetailHeaderProps> = ({ img, location, name }) => {

  const { Header } = Layout

  console.log(img)

  //http://loremflickr.com/640/480/sports

  // const imgSrc = img.replace('640', '1280').replace('480', '720')
  const imgSrc = img.replace('640', '1920').replace('480', '1080')

  console.log(imgSrc)  

  return (
    <div className={Styles.container}>
      <div>
        <Space align='start' size='middle'>
          <RollbackOutlined  style={{ fontSize: '24px' }} />
          <div>
            <Typography className={Styles.name}>{name}</Typography>
            <Space align='start' className={Styles.location}>
              <EnvironmentOutlined />
              <Typography>{location}</Typography>
            </Space>
          </div>
        </Space>
      </div>
      <div className={Styles.image} style={{ backgroundImage: `url(${imgSrc})` }}>

      </div>

    </div>
  )
}
