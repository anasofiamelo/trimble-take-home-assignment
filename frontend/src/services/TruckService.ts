import BaseService from './BaseService'
class TruckService extends BaseService {
  static base_endpoint = '/trucks'

  static async findLastLocation(id: string) {
    await this.get(`${id}/locations/last`)
  }

  static async createLocation(
    truckId: string,
    data: { chassis: string; latitude: number; longitude: number }
  ) {
    await this.post(`${truckId}/locations`, data)
  }
}

export default TruckService
