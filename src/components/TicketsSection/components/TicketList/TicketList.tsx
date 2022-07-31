import React, { useMemo, useState  } from 'react'
import { Pagination, PaginationProps, Spin } from 'antd'
import Styles from './TicketList.module.scss'
import { useGetTravelList } from 'src/service/travel'
import { Button } from 'src/components'
import { TravelCard } from './components'

export const TicketList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading, isError, refetch } = useGetTravelList()

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
  }

  if(isError) {
    return (
      <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Button onClick={refetch} btnType='primary' btnSize='large'>Houve um problema, tente novamente!</Button>
      </div>
    )
  }
  
  if(isLoading) {
    return (
      <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Spin size='large' />
      </div>
    )
  }

  if(data?.length === 0 ){
    return <div>Não há passagens disponíveis</div>
  }
  
  return (
    <div className={Styles.container}>
      {list.length > 0 && list[currentPage - 1].map((travel) => <TravelCard key={travel.id} travel={travel} />)}
      <Pagination size='small' onChange={onChange} current={currentPage} total={data?.length} showTotal={showTotal} />
    </div>
  )
}
