import React from 'react'
import { Button } from 'src/components'
import { Space, Typography, Spin } from 'antd'
import Styles from './DetailHeader.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { EnvironmentOutlined, RollbackOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

type DetailHeaderProps = {
  name: string
  location: string
  img: string
}

export const DetailHeader: React.FC<DetailHeaderProps> = ({ img, location, name }) => {

  const imgSrc = img.replace('640', '1280').replace('480', '720')

  const router = useRouter()
  
  return (
    <div className={Styles.container}>
      <div>
        <div className={Styles.header}>
          <RollbackOutlined onClick={() => router.back()} style={{ fontSize: '24px' }} />
          <div>
            <Typography className={Styles.name}>{name}</Typography>
            <Space align='start' className={Styles.location}>
              <EnvironmentOutlined style={{ marginRight: -10 }} />
              <Typography>{location}</Typography>
            </Space>
          </div>
        </div>
      </div>
      <div className={Styles.imageContainer}>
        <Spin />
        <LazyLoadImage
          alt={name}
          height={450}
          width='100%'
          visibleByDefault={true}
          src={imgSrc}
          effect='blur'
          className={Styles.image}
        />
        <div className={Styles.buttonContainer} >
          <Button 
            btnType='secondary'
            btnSize='large'
          >
            Visualizar mais fotos
          </Button>
        </div>
      </div>
    </div>
  )
}
