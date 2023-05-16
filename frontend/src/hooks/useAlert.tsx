import { AlertColor } from '@mui/material'
import { useState } from 'react'

function useAlert() {
  const [alert, setAlert] = useState<{ type: AlertColor; message: string } | null>(null)
  const handleCloseAlert = () => setAlert(null)
  return { alert, setAlert, handleCloseAlert }
}

export default useAlert
