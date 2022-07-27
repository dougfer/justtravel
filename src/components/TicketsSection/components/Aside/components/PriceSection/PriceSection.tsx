import React, { useState } from 'react'
import { Typography, Row, Col, Radio, Card } from 'antd'
import Styles from './PriceSection.module.scss'

export const PriceSection: React.FC = () => {

  const [selectedPrice, setSelectedPrice] = useState<string>('')

  const priceRange = ['R$10,00 - R$390,00', 'R$390,00 - R$600,00', 'R$600,00 - R$800,00', 'R$800,00 - R$1000,00']

  return (
    <div style={{ width: '100%' }}>
      <Typography className={Styles.title}>Preço</Typography>
      <Card bordered={false}>
        {priceRange.map((price, index) => 
          <Card.Grid onClick={() => setSelectedPrice(price)} className={`${Styles.priceTag} ${selectedPrice === price && Styles.checked}`} key={index} hoverable={false}>
            <Typography className={Styles.text}>{price}</Typography>
          </Card.Grid>)}
      </Card>
    </div>
  )
}
