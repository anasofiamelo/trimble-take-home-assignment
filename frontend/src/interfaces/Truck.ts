export interface Location {
  truckId: string
  chassi: string
  latitude: number
  longitude: number
}

export interface Truck {
  chassi: string
  model: string
  year: number
  lastLocation: Location
  locations: Location[]
}
