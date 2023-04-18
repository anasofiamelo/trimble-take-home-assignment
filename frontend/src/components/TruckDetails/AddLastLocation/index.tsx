import { FormEvent, useState } from 'react'
import { TextField, Button, Alert } from '@mui/material'
import { useLoaderData, useParams } from 'react-router-dom'

import TruckService from '../../../services/TruckService'
import useAlert from '../../..//hooks/useAlert'

import { Truck } from '../../../interfaces/Truck'

type LoaderData = {
  truck?: Truck
  status?: number
}

function AddLastLocation() {
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')

  const data = useLoaderData() as LoaderData
  const missingData = !latitude || !longitude

  const { alert, setAlert, handleCloseAlert } = useAlert()

  const { id: truckId } = useParams()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    let formData = {
      chassis: data!.truck!.chassi,
      latitude: +latitude,
      longitude: +longitude
    }
    try {
      setAlert(null)
      e.preventDefault()
      const res = await TruckService.createLocation(truckId!, formData)
      setAlert({ type: 'success', message: 'Last location added' })
    } catch (err: unknown) {
      setAlert({ type: 'error', message: 'Server error' })
    }
  }

  return (
    <div>
      <h2>Add last location to {data.truck?.model} vehicle</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 15
        }}
        onSubmit={handleSubmit}
      >
        {alert && (
          <Alert onClose={handleCloseAlert} severity={alert?.type}>
            {alert?.message}
          </Alert>
        )}

        <div style={{ display: 'grid', gap: 10 }}>
          <TextField
            value={data?.truck?.chassi}
            label="Chassi"
            size="small"
            variant="outlined"
            required={true}
            disabled={true}
          />

          <TextField
            onChange={(e) => setLatitude(e.target.value)}
            label="Latitude"
            size="small"
            variant="outlined"
            type="number"
            required={true}
          />

          <TextField
            onChange={(e) => setLongitude(e.target.value)}
            label="Longitude"
            size="small"
            variant="outlined"
            type="number"
            required={true}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button disabled={missingData} type="submit" variant="contained">
            Add last location
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddLastLocation
