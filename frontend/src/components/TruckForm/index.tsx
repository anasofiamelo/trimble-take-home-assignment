import { FormEvent, useState } from 'react'
import { TextField, Button, Alert } from '@mui/material'
import { AxiosError } from 'axios'

import TruckService from '../../services/TruckService'
import useAlert from '../../hooks/useAlert'
import { status } from '../../constants/httpStatusCode'

function TruckForm() {
  const [chassis, setChassis] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [year, setYear] = useState<string>('')

  const missingData = !chassis || !model || !year

  const { alert, setAlert, handleCloseAlert } = useAlert()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    let data = { chassis, model, year: +year }
    try {
      setAlert(null)

      e.preventDefault()

      await TruckService.create(data)

      setAlert({ type: 'success', message: 'Truck created' })
    } catch (err: unknown) {
      const error = err as AxiosError

      const response = error.response

      if (response?.status === status.conflict) {
        setAlert({ type: 'warning', message: 'Truck already registered' })
        return
      }

      setAlert({ type: 'error', message: 'Server error' })
    }
  }

  return (
    <div>
      <h2>Add a truck</h2>
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
            onChange={(e) => setChassis(e.target.value)}
            label="Chassis"
            size="small"
            variant="outlined"
            required={true}
          />
          <TextField
            onChange={(e) => setModel(e.target.value)}
            label="Model"
            size="small"
            variant="outlined"
            required={true}
          />
          <TextField
            onChange={(e) => setYear(e.target.value)}
            label="Year"
            size="small"
            variant="outlined"
            type="number"
            required={true}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button disabled={missingData} type="submit" variant="contained">
            Add truck
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TruckForm
