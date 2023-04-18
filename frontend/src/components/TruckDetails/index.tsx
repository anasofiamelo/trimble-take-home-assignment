import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Alert, Button, Stack } from '@mui/material'
import { LatLngExpression } from 'leaflet'
import { AxiosError } from 'axios'

import { status } from '../../constants/httpStatusCode'

import TruckService from '../../services/TruckService'

import useAlert from '../../hooks/useAlert'

import { Truck } from '../../interfaces/Truck'

import Map from './Map'
import GoBack from '../GoBack'

type LoaderData = {
  truck?: Truck
  status?: number
}

function TruckDetails() {
  const data = useLoaderData() as LoaderData
  const lastLocation = data?.truck?.lastLocation

  const { alert, setAlert, handleCloseAlert } = useAlert()
  const [center, setCenter] = useState<LatLngExpression>([-3.7232, -38.4701])

  useEffect(() => {
    if (data.status === status.internal_server_error) {
      setAlert({ type: 'error', message: 'Internal server error' })
    }
    if (lastLocation) {
      setCenter([lastLocation.latitude, lastLocation.longitude])
    }
  }, [data])

  return (
    <div>
      <GoBack />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h2>Truck</h2>

        {alert && (
          <Alert onClose={handleCloseAlert} severity={alert.type}>
            {alert.message}
          </Alert>
        )}
        <Link to="add-last-location">
          <Button variant="contained">Add Last Location</Button>
        </Link>
      </Stack>

      {data.truck && (
        <div>
          <p>Chassis: {data.truck.chassis}</p>
          <p>Model: {data.truck.model}</p>
          <p>Year: {data.truck.year}</p>
        </div>
      )}

      {!lastLocation && (
        <p>Looks like this truck does not have any locations registered yet.</p>
      )}
      <Map hasMarker={!!lastLocation} center={center} />
    </div>
  )
}

export async function loader({ params }: any) {
  try {
    const truck_response = await TruckService.findOne(params.id)
    return {
      truck: {
        ...truck_response.data.truck,
        lastLocation: truck_response.data.lastLocation[0]
      }
    }
  } catch (err: unknown) {
    const error = err as AxiosError
    if (!error.response) {
      return { status: status.internal_server_error }
    }
    return null
  }
}

export default TruckDetails
