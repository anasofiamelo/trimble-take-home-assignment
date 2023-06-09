import { useEffect, useState } from 'react'
import { Alert, Button, Stack } from '@mui/material'
import { useLoaderData, Link } from 'react-router-dom'
import { AxiosError } from 'axios'

import { status } from '../../constants/httpStatusCode'

import TruckService from '../../services/TruckService'

import useAlert from '../../hooks/useAlert'

import { Truck } from '../../interfaces/Truck'
import TruckCard from './TruckCard'

type LoaderData = {
  trucks?: Truck[]
  status?: number
}

function TrucksList() {
  const data = useLoaderData() as LoaderData
  const [trucks, setTrucks] = useState<Truck[]>()
  const { alert, setAlert, handleCloseAlert } = useAlert()

  useEffect(() => {
    if (data.status === status.internal_server_error) {
      setAlert({ type: 'error', message: 'Server error when fetching information' })
    }

    if (data.trucks) {
      setTrucks(data.trucks)
    }
  }, [data])

  async function handleDeleteTruck(_id: string, model: string) {
    try {
      await TruckService.delete(_id)
      setAlert({ type: 'success', message: `${model} deleted` })
      setTrucks((prev) => prev?.filter((truck) => truck._id !== _id))
    } catch (err: unknown) {
      const error = err as AxiosError
      if (!error.response) {
        setAlert({ type: 'error', message: 'Internal server error' })
      }
    }
  }

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
        {trucks?.map((truck: Truck) => (
          <TruckCard onDelete={handleDeleteTruck} key={truck._id} {...truck} />
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
