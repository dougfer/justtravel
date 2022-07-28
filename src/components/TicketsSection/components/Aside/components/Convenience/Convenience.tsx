import React from 'react'
import { Typography, Checkbox } from 'antd'
import Styles from './Convenience.module.scss'

export const Convenience: React.FC = () => {

  const options = [
    { label: 'Wi-Fi', value: 'wifi' },
    { label: 'Cozinha', value: 'kitchen' },
    { label: 'Máquina de Lavar', value: 'washingMachine' },
    { label: 'Ar-condicionado', value: 'airConditioning' },
    { label: 'Secadora', value: 'dryer' },
  ]

  return (
    <div>
      <Typography className={Styles.title}>Comodidades</Typography>
      <Checkbox.Group 
        options={options}
        className={Styles.checkbox}
      />
    </div>
  )
}
