import React, { useEffect } from 'react'
import { Space } from 'antd'
import Styles from './TicketList.module.scss'
import { getTicketsList } from 'src/service'

export const TicketList: React.FC = () => {


  const getList = async () => {
    const result = await getTicketsList()

    console.log(result)
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <Space className={Styles.container}>
      oioioi
    </Space>
  )
}
