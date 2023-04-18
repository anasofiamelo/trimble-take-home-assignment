export interface Location {
  truckId: string
  chassi: string
  latitude: number
  longitude: number
}

export interface Truck {
  _id: string
  chassis: string
  model: string
  year: number
  lastLocation?: Location
  locations?: Location[]
}
