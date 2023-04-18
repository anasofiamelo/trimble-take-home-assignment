import { Link } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography, Stack } from '@mui/material'

function TruckCard(props: any) {
  const { _id, model, chassis, year, onDelete } = props

  async function handleDeleteTruck() {
    onDelete(_id, model)
  }
  return (
    <Card sx={{ padding: 1 }} variant="outlined">
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography color="text.secondary">Model: </Typography>
          <Typography variant="h6">{model.toUpperCase()}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Chassis:
          </Typography>
          <Typography>{chassis}</Typography>
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
