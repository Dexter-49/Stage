import React from 'react'
import { Outlet } from 'react-router'
import { Box } from '@mui/material'

function Layout() {
  return (
    <Box>
        <Outlet/>
        
    </Box>
  )
}

export default Layout