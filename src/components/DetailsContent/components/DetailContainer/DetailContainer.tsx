import React from 'react'
import { Space, Typography } from 'antd'
import Styles from './DetailContainer.module.scss'
import { CoffeeOutlined, DingtalkOutlined, HomeOutlined, WifiOutlined } from '@ant-design/icons'

type DetailContainerProps = {
  location: string
}

export const DetailContainer: React.FC<DetailContainerProps> = ({location}) => {

  return (
    <div className={Styles.container}>
      <Space className={Styles.reviews}>
        <div>
          6.3
        </div>
        <Typography className={Styles.avaluation}>Excellent</Typography>
        <Typography className={Styles.reviewsNumber}>(423) Reviews</Typography>
      </Space>
      <Space className={Styles.perks} size='middle'>
        <div>
          <DingtalkOutlined />
          <Typography>Passagens aéreas</Typography>
        </div>
        <div>
          <WifiOutlined />
          <Typography>Wi-Fi</Typography>
        </div>
        <div>
          <CoffeeOutlined />
          <Typography>Café da manhã</Typography>
        </div>
        <div>
          <HomeOutlined />
          <Typography>Quarto</Typography>
        </div>
      </Space>
      <Space className={Styles.ticketInfo} direction='vertical'>
        <Typography className={Styles.title} >Sobre o Ingresso selecionado:</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat volutpat elementum sed donec bibendum vitae tincidunt. Quis eget ornare amet massa eu at ipsum. Augue purus ante ultrices dictum integer sagittis sem leo.
        </Typography>
        <br />
        <Typography>
          Maecenas suspendisse ipsum purus bibendum maecenas faucibus risus, semper. Aliquet potenti neque semper dui aliquet. Imperdiet lectus id sed pharetra nunc, proin. Ultrices varius rhoncus facilisi condimentum habitant rhoncus ac. 
        </Typography>
        <br />
        <Typography>
          Vivamus varius gravida urna viverra in. Aliquet amet dictum malesuada sapien morbi est interdum. Tincidunt nunc convallis nullam lorem eu elementum interdum. Ut ultrices suscipit dolor lorem consequat ac nibh justo. Viverra quam nunc risus urna. Pharetra vestibulum diam praesent consequat consequat fermentum nunc.
        </Typography>
      </Space>
      <div>
        <Typography className={Styles.title}>Localização</Typography>
        <iframe
          width='100%'
          height="450"
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}
            &q=${location}`}>
        </iframe>
      </div>
    </div>
  )
}

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyCFtWDnMPM9Ub6YTI0fMdgVFx2cX6CiH1c')
// })(DetailContainer)
