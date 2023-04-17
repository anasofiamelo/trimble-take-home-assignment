import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Alert } from '@mui/material'

import { status } from '../../constants/httpStatusCode'

import TruckService from '../../services/TruckService'

import useAlert from '../../hooks/useAlert'

import { Truck } from '../../interfaces/Truck'

type LoaderData = {
  truck?: Truck
  status?: number
}

function TruckDetails() {
  const data = useLoaderData() as LoaderData
  const { alert, setAlert, handleCloseAlert } = useAlert()

  useEffect(() => {
    if (data.status === status.internal_server_error) {
      setAlert({ type: 'error', message: 'Erro no servidor interno' })
    }
  }, [data])

  return (
    <div>
      <h2>Truck</h2>

      {alert && (
        <Alert onClose={handleCloseAlert} severity={alert.type}>
          {alert.message}
        </Alert>
      )}

      {data.truck && (
        <div>
          <p>Chassi: {data.truck.chassi}</p>
          <p>Model: {data.truck.model}</p>
          <p>Year: {data.truck.year}</p>
        </div>
      )}
    </div>
  )
}

export async function loader({ params }: any) {
  try {
    const response = await TruckService.findOne(params.chassi)
    return { truck: response.data }
  } catch (error: any) {
    if (!error.response) {
      return { status: status.internal_server_error }
    }
    return null
  }
}

export default TruckDetails
