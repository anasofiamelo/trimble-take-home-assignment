import { Link } from 'react-router-dom'
import { AxiosError } from 'axios'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Stack,
  Alert
} from '@mui/material'

import TruckService from '../../../services/TruckService'
import useAlert from '../../../hooks/useAlert'

function TruckCard(props: any) {
  const { _id, model, chassi, year } = props

  const { alert, setAlert, handleCloseAlert } = useAlert()

  async function handleDeleteTruck() {
    try {
      await TruckService.delete(_id)
    } catch (err: unknown) {
      const error = err as AxiosError
      if (!error.response) {
        setAlert({ type: 'error', message: 'Internal server error' })
      }
    }
  }
  return (
    <Card sx={{ padding: 1 }} variant="outlined">
      {alert && (
        <Alert onClose={handleCloseAlert} severity={alert.type}>
          {alert.message}
        </Alert>
      )}
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography color="text.secondary">Model: </Typography>
          <Typography variant="h6">{model.toUpperCase()}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Chassi:
          </Typography>
          <Typography>{chassi}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Year:
          </Typography>
          <Typography>{year}</Typography>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}
      >
        <Link to={`${_id}`}>
          <Button size="small">Truck details</Button>
        </Link>

        <Button onClick={handleDeleteTruck} size="small" variant="contained">
          Delete truck
        </Button>
      </CardActions>
    </Card>
  )
}

export default TruckCard
