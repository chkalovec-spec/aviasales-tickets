export type fetchSearchIdData = {
  searchId: string
}

export type fetchTicketsData = {
  stop: boolean
  tickets: ticketsData[]
}

export type ticketsData = {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}
