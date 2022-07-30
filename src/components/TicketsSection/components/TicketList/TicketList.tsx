import React from 'react'
import { Space, Image } from 'antd'
import Styles from './TicketList.module.scss'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { useGetTravelList } from 'src/service/travel'
import { TravelCard } from './components'

export const TicketList: React.FC = () => {

  const { data, isLoading } = useGetTravelList()
  
  const list = useAppSelector((state) => state.travels)

  const dispatch = useAppDispatch()

  // const { isLoading, isError } = useQuery(['getTravelList'], getTicketsList, {
  //   onSuccess: ({ data }) => dispatch(incrementList(data))
  // })

  // console.log(list)

  return (
    <div className={Styles.container}>
      <Image.PreviewGroup>
        {data && data.map((travel) => <TravelCard key={travel.id} travel={travel} />)}
      </Image.PreviewGroup>
    </div>
  )
}
