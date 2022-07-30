import React, { useMemo, useState, useRef  } from 'react'
import { Space, Image, Pagination, PaginationProps } from 'antd'
import Styles from './TicketList.module.scss'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { useGetTravelList } from 'src/service/travel'
import { TravelCard } from './components'
import { Ticket } from 'src/service'

export const TicketList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useGetTravelList()

  const showTotal: PaginationProps['showTotal'] = total =><p style={{ color: '#828292' }}>{total} Resultados</p>;

  const list = useMemo(() => {
    if(data && data.length > 0) {
      const dataRange = Math.ceil(data.length / 10)

      const list = new Array(dataRange).fill(null).map((_, index) => {
        return data.slice((index * 10), (index * 10) + 10)
      })

      return list
    }

    return []
  }, [data])

  const onChange: PaginationProps['onChange'] = page => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  };

  if(data?.length === 0 ){
    return <div />
  }
  
  return (
    <div className={Styles.container}>
      {list.length > 0 && list[currentPage - 1].map((travel) => <TravelCard key={travel.id} travel={travel} />)}
      <Pagination size='small' onChange={onChange} current={currentPage} total={data?.length} showTotal={showTotal} />
    </div>
  )
}
