import { Box } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <Box>
        <Navbar/>
        {children}
        <Footer/>
    </Box>
  )
}

export default Layout