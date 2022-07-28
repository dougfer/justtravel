import React, { useState } from 'react'
import { Card, Typography } from 'antd'
import House from './House.svg'
import Hotel from './Hotel.svg'
import Apartment from './Apartment.svg'
import Styles from './PropertyTypes.module.scss'

export const PropertyTypes: React.FC = () => {
  const [propertySelected, setProperty] = useState<string>('')

  const properties = [
    { icon: <House />, label: 'Casa (346)', value: 'house' },
    { icon: <Hotel />, label: 'Apartamento (234)', value: 'hotel' },
    { icon: <Apartment />, label: 'Hotel (23)', value: 'apartment' },
  ]

  return (
    <div>
      <Typography className={Styles.title}>Tipos de propriedade</Typography>
      <Card bordered={false}>
        {properties.map((property, index) => 
        <Card.Grid 
          onClick={() => setProperty(property.value)}
          hoverable={false} 
          className={`${Styles.property} ${propertySelected === property.value && Styles.checked}`}
          key={index}
        >
          {property.icon}
          <Typography className={Styles.label}>{property.label}</Typography>
        </Card.Grid>)}
      </Card>
    </div>
  )
}
