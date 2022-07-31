import React, { useEffect } from 'react'
import { Layout, Spin } from 'antd'
import { travelApi } from 'src/service/travel'
import { useRouter } from 'next/router'
import { DetailHeader, DetailContainer, DetailsAside } from './components'
import { Button } from 'src/components'
import Head from 'next/head'

export const DetailsContent: React.FC = () => {

  const { Header, Content, Sider } = Layout

  const router = useRouter()
  const { id } = router.query
  const travelId = Array.isArray(id) ? id[0] : id
  
  const [trigger, { data, isLoading, isError }] = travelApi.useLazyGetTravelByIdQuery()

  useEffect(() => {
    if(router.isReady && travelId) {
      trigger(travelId)
    }
  }, [router.isReady, trigger])

  if(isError) {
    return (
      <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Button onClick={() => trigger(travelId!)} btnType='primary' btnSize='large'>Houve um problema, tente novamente!</Button>
      </div>
    )
  }
  
  if(!data || isLoading) {
    return (
      <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Spin size='large' />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <Header style={{ backgroundColor: 'transparent', alignItems: 'flex-start', padding: 0, height: '100%' }}>
        <DetailHeader location={data.location} img={data.images} name={data.name}  />
      </Header>
      <Content hasSider>
        <Layout style={{ padding: '37px 60px' }}>
          <DetailContainer location={data.location} />
          <Sider width={370} style={{ backgroundColor: 'transparent' }}>
            <DetailsAside price={data.price} />
          </Sider>
        </Layout>
      </Content>
    </>
  )
}
