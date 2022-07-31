import React, { useState } from 'react'
import { Ticket } from 'src/service'
import { useRouter } from 'next/router'
import Styles from './TravelCard.module.scss'
import { Button } from 'src/components/Button'
import { Card, Space, Typography, Divider } from 'antd'
import { formatToRealStr } from 'src/utils/formatToRealString'
import { ArrowRightOutlined, EnvironmentOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'

type TravelCardProps = {
  travel: Ticket,
}

export const TravelCard: React.FC<TravelCardProps> = ({ travel }) => {
  const [markedFavorite, setMarkedFavorite] = useState(false)

  const router = useRouter()

  const handleFavorite = () => {
    setMarkedFavorite(!markedFavorite)
  }

  const handleRedirect = () => {
    router.push(`travel/${travel.id}`)
  }

  const heartIconStyles = {
    color: '#FFFFFF', 
    fontSize: '24px', 
    cursor: 'pointer'
  }

  return (
    <div className={Styles.container}>
      <div
        style={{ backgroundImage: `url(${travel.images})` }}
        className={Styles.image}
      >
        <div>
          <Typography.Link onClick={handleRedirect}>Ingresso</Typography.Link>
          {markedFavorite ? 
            <HeartFilled onClick={handleFavorite} style={{...heartIconStyles}} /> 
            : <HeartOutlined onClick={handleFavorite} style={{...heartIconStyles}} /> 
          }
        </div>
      </div>
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
            <Button onClick={handleRedirect} btnType='primary' icon={<ArrowRightOutlined />}>
              Saber mais
            </Button>
          </Space>
        </Card>
      </div>
    </div>
  )
}
