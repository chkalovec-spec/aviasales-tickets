export type Ticket = {
  id: string
  price: number
  priceText: string
  carrierLogo: string
  segments: Segment[]
  maxStops: number
  minDuration: number
}

export type Segment = {
  id: string
  origin: string
  destination: string
  sendDate: string
  arrivalDate: string
  duration: number
  durationText: string
  stops: string[]
}
