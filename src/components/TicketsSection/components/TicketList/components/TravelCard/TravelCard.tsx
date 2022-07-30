import React from 'react'
import { Card, Space, Image, Typography, Divider } from 'antd'
import { Ticket } from 'src/service'
import Styles from './TravelCard.module.scss'
import { ArrowRightOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Button } from 'src/components/Button'
import { formatToRealStr } from 'src/utils/formatToRealString'

type TravelCardProps = {
  travel: Ticket,
}

export const TravelCard: React.FC<TravelCardProps> = ({ travel }) => {


  return (
    <div className={Styles.container}>
      {/* <Card className={Styles.image} style={{ backgroundImage: `url(${travel.images})` }} >
      </Card> */}
      <Image 
        className={Styles.image}
        loading='lazy'
        height={233}
        src={`${travel.images}?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
        preview={false}
      />
      <div className={Styles.infoContent}>
        <Card bordered={false} className={Styles.travelInfo}>
          <Typography className={Styles.name}>
            {travel.name}
          </Typography>
          <Space className={Styles.location}>
            <EnvironmentOutlined />
            <Typography>{travel.location}</Typography>
          </Space>
          <Space className={Styles.reviews}>
            <div>
              6.3
            </div>
            <Typography className={Styles.avaluation}>Excellent</Typography>
            <Typography className={Styles.reviewsNumber}>(423) Reviews</Typography>
          </Space>
        </Card>
        <Card bordered={false} className={Styles.priceInfoContent} >
          <Divider type='vertical' />
          <Space className={Styles.priceInfo}>
            <div style={{ paddingRight: '40px' }}>
              <Typography className={Styles.priceBefore}>de {formatToRealStr(1.69 * Number(travel.price))} por</Typography>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography className={Styles.priceAfter}>R$</Typography>
                <Typography className={Styles.priceAfterValue}>{formatToRealStr(Number(travel.price)).slice(2)}</Typography>
              </div>
            </div>
            <Button btnType='primary' icon={<ArrowRightOutlined />}>
              Saber mais
            </Button>
          </Space>
        </Card>
      </div>
    </div>
  )
}
