import { Button, Card, CardActions, CardContent, Typography, Stack } from '@mui/material'

function TruckCard(props: any) {
  const { model, chassi, year } = props
  return (
    <Card variant="outlined">
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
      <CardActions>
        <Button size="small">Delete truck</Button>
      </CardActions>
    </Card>
  )
}

export default TruckCard
