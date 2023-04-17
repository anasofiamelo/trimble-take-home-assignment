import axios, { AxiosHeaders } from 'axios'
import { Truck } from '../interfaces/Truck'

type HttpMethods = 'post' | 'get' | 'put' | 'patch' | 'delete'

const resolve = (args: string[]) => {
  const formattedArgs: string[] = []

  args.forEach((arg) => {
    if (!arg || arg === '/') return
    formattedArgs.push(arg)
  })

  return formattedArgs.join('/')
}

export const BASE_URL = 'http://localhost:8080'

class TruckService {
  static base_endpoint = '/trucks'
  static base_url = BASE_URL
  static headers: Partial<AxiosHeaders> = {}

  static _create() {
    return axios.create({
      baseURL: this.base_url,
      headers: this.headers
    })
  }

  static addHeaders(name: string, value: string) {
    this.headers[name] = value
  }

  static async _fetch(endpoint: string, method = 'get', options = {}) {
    const instance = this._create()
    const url = resolve([this.base_endpoint, endpoint])
    const httpMethod = method.toLowerCase() as HttpMethods
    return await instance[httpMethod](url, options)
  }

  static get(endpoint: string, params: any) {
    return this._fetch(endpoint, 'get', params)
  }

  static post(endpoint: string, params: any) {
    return this._fetch(endpoint, 'post', params)
  }

  static findAll(params: any = {}) {
    return this._fetch('', 'get', { params })
  }

  static findOne(id: string) {
    return this._fetch(`${id}`, 'get')
  }

  static create(data: Truck) {
    return this._fetch(`/`, 'post', data)
  }

  static delete(id: string) {
    return this._fetch(`${id}`, 'delete')
  }
}

export default TruckService
