
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

export default function Header() {
  const [showBanner, setShowBanner] = useState(true)
  useEffect(() => {
    const data = window.localStorage.getItem('DIVAWEB_BANNER')
    if (data !== null) setShowBanner(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('DIVAWEB_BANNER', JSON.stringify(showBanner))
  }, [showBanner])

  return (
    <Box >
    <AppBar position="static" sx={{ background: 'inherit', boxShadow: 'none' }}>
      {showBanner && (
        <AppBar
          position="static"
          sx={{ background: '#3393E0', boxShadow: 'none' }}
        >
          <Box textAlign="center">
            <Button href="https://docs.divaprotocol.io/"  target="_blank" sx={{ color: '#FFFFFF' }}>
              🚀 Learn how to earn $DIVA tokens for trying out the app
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ color: '#FFFFFF' }}
              onClick={() => {
                setShowBanner(false)
              }}
            >
              <CloseIcon />
            </Button>
          </Box>
        </AppBar>
      )}
      <Toolbar sx={{ justifyContent: "flex-end" }}>
      <Button variant="contained" href="https://docs.divaprotocol.io/"  target="_blank" sx={{mr:"55px", mt:"40px", minHeight:"55px", fontSize:"1rem"}}   >
        LAUNCH TESTNET APP
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
