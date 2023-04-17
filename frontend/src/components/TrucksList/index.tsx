import { useEffect } from 'react'
import { Alert, Button, Card, Stack } from '@mui/material'
import { useLoaderData, Link } from 'react-router-dom'
import { AxiosError } from 'axios'

import { status } from '../../constants/httpStatusCode'

import TruckService from '../../services/TruckService'

import useAlert from '../../hooks/useAlert'

import { Truck } from '../../interfaces/Truck'

type LoaderData = {
  trucks?: Truck[]
  status?: number
}

function TrucksList() {
  const data = useLoaderData() as LoaderData
  const { alert, setAlert, handleCloseAlert } = useAlert()

  useEffect(() => {
    if (data.status === status.internal_server_error) {
      setAlert({ type: 'error', message: 'Server error when fetching information' })
    }
  }, [data])

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <h2>Trucks List</h2>
        <Link to="/add-truck">
          <Button variant="contained">Add truck</Button>
        </Link>
      </Stack>

      {alert && (
        <Alert onClose={handleCloseAlert} severity={alert.type}>
          {alert.message}
        </Alert>
      )}
      <Stack spacing={1}>
        {data.trucks?.map((truck: any) => (
          <Link to={`${truck.chassi}`} key={truck.chassi}>
            <Card variant="outlined">
              <p>Chassi: {truck.chassi}</p>
              <p>Model: {truck.model}</p>
            </Card>
          </Link>
        ))}
      </Stack>
    </div>
  )
}

export async function loader() {
  try {
    const response = await TruckService.findAll()
    return { trucks: response.data }
  } catch (err: unknown) {
    const error = err as AxiosError
    if (!error.response) {
      return { status: status.internal_server_error }
    }
    return null
  }
}

export default TrucksList
