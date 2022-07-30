import React, { useState } from 'react'
import { Typography, Card } from 'antd'
import Styles from './PriceSection.module.scss'

export const PriceSection: React.FC = () => {

  const [selectedPrice, setSelectedPrice] = useState<number>()

  const priceRange = [
    {value: 10.00, label: 'R$10,00 - R$390,00'},
    {value: 20.00, label: 'R$10,00 - R$390,00'},
    {value: 30.00, label: 'R$10,00 - R$390,00'},
    {value: 40.00, label: 'R$10,00 - R$390,00'},
  ]

  return (
    <div>
      <Typography className={Styles.title}>Preço</Typography>
      <Card bordered={false}>
        {priceRange.map((price, index) => 
          <Card.Grid 
            onClick={() => setSelectedPrice(price.value)} 
            className={`${Styles.priceTag} ${selectedPrice === price.value && Styles.checked}`} 
            key={index} 
            hoverable={false}
          >
            <Typography className={Styles.text}>{price.label}</Typography>
          </Card.Grid>)}
      </Card>
    </div>
  )
}
