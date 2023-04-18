import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function GoBack() {
  const navigate = useNavigate()
  return <Button onClick={() => navigate(-1)}>Go back</Button>
}

export default GoBack
