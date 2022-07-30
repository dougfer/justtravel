import React from 'react'
import WorldLogo from 'src/assets/WorldLogo.svg'
import Styles from './MorePackagesSection.module.scss'
import { Typography } from 'antd'
import { Button } from 'src/components'
import { ArrowRightOutlined } from '@ant-design/icons'

export const MorePackagesSection: React.FC = () => {

  const handleClick = () => {
    window.alert('Conhecer mais pacotes')
  }

  return (
    <div className={Styles.section}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <WorldLogo style={{ postition: 'absolute' }} />
        <Typography className={Styles.text}>
          Pacotes a partir de R$499? Até parece viagem! <br />
          Descubra o seu próximo destino por um precinho que só o lorem tem.
        </Typography>
      </div>
      <Button btnType='secondary' btnSize='large' onClick={handleClick} icon={<ArrowRightOutlined/>}>Conhecer mais pocotes</Button>
    </div>
  )
}
