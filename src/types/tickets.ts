export type Ticket = {
  id: string
  price: string
  carrierLogo: string
  segments: Segment[]
}

export type Segment = {
  id: string
  origin: string
  destination: string
  sendDate: string
  arrivalDate: string
  duration: string
  stops: string[]
}
