import React, { useState } from 'react'
import Styles from './DetailsAside.module.scss'
import { formatToRealStr } from 'src/utils/formatToRealString'
import { CalendarOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, DatePicker, Typography, Divider, Popover, InputNumber } from 'antd'
import { Button } from 'src/components'
 
type PopComponentProps = {
  onAdultTicketChange: (value: number) => void,
  adultTicket: number
  childTicket: number
  onChildTicketChange: (value: number) => void
  onClose: () => void
}

const PopComponent: React.FC<PopComponentProps> = ({ adultTicket, onAdultTicketChange, childTicket, onChildTicketChange, onClose }) => {


  return (
    <div style={{ display: 'flex', flexDirection: 'column',  padding: 20, alignItems: 'center' }}>
      <label htmlFor='adultTickets' style={{ marginBottom: 10 }}>
        Ingresso adulto: 
        <InputNumber style={{ marginLeft: 10 }} max={50} value={adultTicket} onChange={(value) => onAdultTicketChange(value)} />
      </label>
      <label htmlFor='adultTickets'>
        Ingresso infantil:
        <InputNumber style={{ marginLeft: 10, marginBottom: 10 }} max={50} value={childTicket} onChange={(value) => onChildTicketChange(value)} />
      </label>
      <Button onClick={onClose} btnType='primary'>Confirmar</Button>
    </div>

  )
}

type DetailsAsideProps = {
  price: string
}

export const DetailsAside: React.FC<DetailsAsideProps> = ({ price }) => {
  const [adultTicket, setAdultTicket] = useState(0)
  const [childTicket, setChildTicket] = useState(0)
  const [visible, setVisible] = useState(false)
  const TRAVEL_INSURANCE = 245.99


  const { Sider } = Layout

  const nmbPrice = Number(price)

  const total = (adultTicket * nmbPrice) + (childTicket * nmbPrice) + TRAVEL_INSURANCE

  const handleBuy = () => {
    alert('Ingresso comprado')
  }

  return (
    <Sider width='100%' className={Styles.container}>
      <div>
        <div className={Styles.inputContent}>
          <CalendarOutlined />
          <div>
            <Typography>Data do Ingresso</Typography>
            <DatePicker 
              style={{ width: '100%', border: 'none' }}
              placeholder='Selecione a data'
              suffixIcon={<DownOutlined />}
            />
          </div>
        </div>
      </div>
      <Divider />
      <Popover
        trigger='click' 
        placement='bottom' 
        title='Selecione a quantidade de ingressos' 
        visible={visible}
        content={
          <PopComponent
            onClose={() => setVisible(!visible)}
            adultTicket={adultTicket}
            onAdultTicketChange={setAdultTicket} 
            childTicket={childTicket}
            onChildTicketChange={setChildTicket}
          />} >
        <div onClick={() => setVisible(!visible)} className={`${Styles.inputContent} ${Styles.ticketInput}`}>
          <UserOutlined />
          <div>
            <Typography>Ingressos</Typography>
            <Typography className={Styles.ticketQuantity}>{childTicket + adultTicket} Ingressos</Typography>
          </div>
        </div>
      </Popover>
      <Divider />
      <div className={Styles.priceInfo}>
        <div>
          <Typography>{childTicket} Ingresso infantil</Typography>
          <Typography>{formatToRealStr(nmbPrice * childTicket)}</Typography>
        </div>
        <div>
          <Typography>{adultTicket} Ingresso adulto</Typography>
          <Typography>{formatToRealStr(nmbPrice * adultTicket)}</Typography>
        </div>
        <div>
          <Typography>Seguro viagem</Typography>
          <Typography>{formatToRealStr(TRAVEL_INSURANCE)}</Typography>
        </div>
      </div>
      <Divider />
      <div className={Styles.buyTicket}>
        <div>
          <Typography>Valor total</Typography>
          <Typography>{formatToRealStr(total)}</Typography>
        </div>
        <Button onClick={handleBuy} btnType='primary' btnSize='large'>Comprar Ingresso</Button>
      </div>

    </Sider>
  )
}
