import axios from 'axios'
import { fetchSearchIdData, fetchTicketsData } from './../types/api'

const BASE_URL = 'https://front-test.beta.aviasales.ru'

export const fetchSearchId = async (): Promise<fetchSearchIdData> => {
  const { data } = await axios.get(`${BASE_URL}/search`)
  return data
}

export const fetchTickets = async (searchId: string): Promise<fetchTicketsData> => {
  const { data } = await axios.get(`${BASE_URL}/tickets?searchId=${searchId}`)
  return data
}
