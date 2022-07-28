// Listagem de ingresso: https://62d085741cc14f8c088b8a7b.mockapi.io/api/v1/ticket
// Detalhes do ingresso: https://62d085741cc14f8c088b8a7b.mockapi.io/api/v1/ticket/:id
import axios from 'axios'


export type Ticket = {
  createdAt: string
  departament: string
  description: string
  id: string
  images: string
  location: string
  name: string
  price: string
}

type Response<TData> = {
  status: number
  statusText: string
  data: TData
}

export const getTicketsList = async (): Promise<Response<Ticket[]>> => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://62d085741cc14f8c088b8a7b.mockapi.io/api/v1/ticket'
    })

    return response
  } catch (err: any) {
    return err
  }
}
