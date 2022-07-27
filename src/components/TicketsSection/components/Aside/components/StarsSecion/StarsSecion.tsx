import React, { useState } from 'react'
import { Card, Typography } from 'antd'
import Styles from './StarsSection.module.scss'
import { StarFilled } from '@ant-design/icons'

export const StarsSecion: React.FC = () => {
  const [selectedStar, setSelectedStar] = useState<number>(0)

  const stars = [1,2,3,4,5]

  return (
    <div>
      <Typography className={Styles.title}>Propriedade</Typography>
      <Card bordered={false}>
        {stars.reverse().map((starCount) => 
          <Card.Grid 
            hoverable={false} 
            onClick={() => setSelectedStar(starCount)} 
            className={`${Styles.starCard} ${selectedStar === starCount && Styles.checked}`}
            key={starCount}
          >
            {Array(starCount).fill(null).map((_, index) => <StarFilled className={Styles.star} key={index} />)}
            <Typography className={Styles.starNumber}>(132)</Typography>
          </Card.Grid>)}
      </Card>
    </div>
  )
}
