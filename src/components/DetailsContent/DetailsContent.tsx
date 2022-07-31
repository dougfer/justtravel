import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { useGetTravelByIdQuery, travelApi } from 'src/service/travel'
import { useRouter } from 'next/router'
import { DetailHeader } from './components'

export const DetailsContent: React.FC = () => {

  const { Header, Content, Sider } = Layout

  const router = useRouter()
  const { id } = router.query
  const travelId = Array.isArray(id) ? id[0] : id
  
  const [trigger, { data }, lastPromiseInfo] = travelApi.useLazyGetTravelByIdQuery()
  
  useEffect(() => {
    if(router.isReady && travelId) {
      console.log('passei aqui')
      trigger(travelId)
    }
  }, [router.isReady, trigger])

  if(!data) {
    return <div />
  }

  return (
    <Layout>{/*style={{ padding: '33px 60px 60px 60px' }}*/}
      <DetailHeader location={data.location} img={data.images} name={data.name}  />
      <Content>oioioioi</Content>

    </Layout>
  )
}
