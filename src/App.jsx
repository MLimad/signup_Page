import React from 'react'
import './index.css'
import Form from "./Form"
import { 
  Grid,
  CssBaseline,
  Typography } from '@mui/material'

const App = () => {

  return (

<section>
<CssBaseline/>

  <Grid container spacing={0}>

    <Grid item xs={12} md={6}>
      <img src="./sign.jpg" alt="" />
    </Grid>

    <Grid item xs={12} md={6} >
      <Typography variant="h6" align="center" sx={{fontWeight:"bold",margin:"30px auto 9px"}}  className='heading' gutterBottom>
          Create Your Free Online Store
      </Typography>
      <Typography variant="subtitle2" align="center" color="text.secondary" gutterBottom>
        With 3 Steps ..
      </Typography>
      {/* Form Component */}
      <Form /> 
      {/* Form Component */}

    </Grid>
  </Grid>
  </section>
  )
}

export default App