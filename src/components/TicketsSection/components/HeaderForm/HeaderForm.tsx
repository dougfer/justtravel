import React, { useState } from 'react'
import { Layout, Form, Input, DatePicker, Button, Space, Card } from 'antd'
import { AppstoreOutlined, DownOutlined, EnvironmentOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import Styles from './HeaderForm.module.scss'

export const HeaderForm: React.FC = () => {
  const [layoutSelected, setLayoutSelected] = useState<'grid' | 'row'>('grid')
  const { Header } = Layout

  return (
    <Header className={Styles.header}>
        <Form layout='inline'>
          <Form.Item>
            <Input.Group compact>
              <Form.Item name={['location', 'name']}>
                <Input 
                  className={Styles.textInput}
                  prefix={<EnvironmentOutlined style={{ color: 'blue', fontSize: '20px', marginLeft: '12px', marginRight: '10px' }} />}
                  placeholder='GetYourGuide Tours & Tickets GmbH'
                />
              </Form.Item>
              <Form.Item name={['location', 'date']}>
                <DatePicker className={Styles.dateInput} placeholder='Selecione a data' suffixIcon={<DownOutlined />} />
              </Form.Item>
              <Form.Item name={['location', 'search']}>
                <Button className={Styles.button} size='large' icon={<SearchOutlined />} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Form>
        <Space size='middle'>
          <Card onClick={() => setLayoutSelected('grid')} className={`${Styles.layoutShift} ${layoutSelected === 'grid' && Styles.checked}`}>
            <AppstoreOutlined />
          </Card>
          <Card onClick={() => setLayoutSelected('row')} className={`${Styles.layoutShift} ${layoutSelected === 'row' && Styles.checked}`}>
            <MenuOutlined />
          </Card>
        </Space>
      </Header>
  )
}
