import React from 'react'
import { Typography, Row, Col, Card } from 'antd'
import Styles from './BrazilDestinationsSection.module.scss'
import Balneario from 'src/assets/balneario.png'
import Saopaulo from 'src/assets/saopaulo.png'
import Salvador from 'src/assets/salvador.png'
import Riodejaneiro from 'src/assets/riodejaneiro.png'
import Florianopolis from 'src/assets/florianopolis.png'

export const BrazilDestinationsSection: React.FC = () => {

  const { Meta } = Card

  const destinations = [
    { label: 'Balneário Camboriú', img: Balneario },
    { label: 'São Paulo', img: Saopaulo },
    { label: 'Salvador', img: Salvador },
    { label: 'Rio de Janeiro', img: Riodejaneiro },
    { label: 'Florianólopis', img: Florianopolis },
  ]

  const handleClick = (name: string) => {
    window.alert(name)
  }

  return (
    <div className={Styles.container}>
      <Typography className={Styles.title}>Conheça o Brasil</Typography>
      <Typography className={Styles.subtitle}>Estes destinos incríveis têm muito a oferecer</Typography>
      <Row gutter={16} align='middle' justify='space-evenly'>
        {destinations.map((destiny) => (
          <Col span={4} key={destiny.label}>
            <Card
              onClick={() => handleClick(destiny.label)}
              hoverable
              style={{ cursor: 'pointer' }}
              cover={<img alt={destiny.label} src={destiny.img.src} />}
            >
              <Meta title={destiny.label} className={Styles.meta} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
