import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Modal, Radio, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import productImg from './assets/keyboard.jpg'
import { ArrowBack, Delete, Payments } from '@mui/icons-material'

function App() {
  const [value, setValue] = useState('a')
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    if ( value !== 'a' ) {
      setOpen(true)
    }
  }

  const handleClose = () => setOpen(false)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Container maxWidth={false}>
      {/* Appbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ background: '#E3A5C7'}}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Challenge: <Box component='span' sx={{ color: '#694F8E' }}>Credit Card Checkout</Box>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* Shipping Address */}
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <Box p={1} sx={{ flexGrow: 1, background: '#E3A5C7'}}>
              <Typography variant='h6' mx={2}>Shipping Address</Typography>
            </Box>
            <Box py={3} px={1} sx={{ background: '#F5F7F8', height: 'fit-content'}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Typography mx={2}>John Smith</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>09987654321</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography mt={2}>
                    <Box component='span' p={1} mx={2} sx={{ color: '#fff', borderRadius: 25, background: '#694F8E'}}>Home</Box>
                    123 Anywhere Street, Just There Subdivision, Somewhere City
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Package Details */}
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <Box p={1} sx={{ flexGrow: 1, background: '#E3A5C7'}}>
              <Typography variant='h6' mx={2}>Package 1 of 1</Typography>
            </Box>
            <Box py={3} px={2} sx={{ background: '#F5F7F8', height: 'fit-content'}}>
              <Typography>Choose your delivery option</Typography>
              <Box mt={3} sx={{ border: '1px solid #B692C2', width: 300}}>
                <Grid container spacing={1} p={1}>
                  <Grid item xs={12}>
                    <Box display='flex' justifyContent='center' alignItems='start'>
                      <Radio />
                      <Box m={1}>
                        <Typography>₱40.00</Typography>
                        <Typography>Priority Delivery</Typography>
                        <Typography mt={3}>Guaranteed by Fri, 25 Jul</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <br />
              <Box py={2} sx={{ border: '1px solid #B692C2', width: '100%', height: 200}}>
                <Grid container spacing={4}>
                  <Grid item xs={4}>
                    <Box component='img' mx={2} src={productImg} width={200} height={200} sx={{ objectFit: 'contain'}}/>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography mt={4}>MageGee Portable 60% Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard with Red Switch for Windows Laptop PC Mac - Black/Grey</Typography>
                    <Typography mt={2} sx={{ fontWeight: 200 }}><small>Color: Black/Red Switch</small></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography mt={4}>$29.99</Typography>
                    <Typography mt={2} sx={{ fontWeight: 200, textDecoration: 'line-through'}}>$36.99</Typography>
                    <Typography mt={2} sx={{ color: 'red' }}>-19%</Typography>
                    <Typography mt={2}><Delete /></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography mt={4}>Qty: 1</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Payment */}
        <Grid item xs={4}>
          <br />
          <Box sx={{ flexGrow: 1 }}>
              <Box p={1} sx={{ flexGrow: 1, background: '#E3A5C7'}}>
                <Typography variant='h6' mx={2}>Select Payment Method</Typography>
              </Box>
              <Box py={3} px={2} sx={{ background: '#F5F7F8', height: 'fit-content'}}>
                <Container>
                  <Box p={2} sx={{ background: "#eee"}}>
                    <Box display='flex' alignItems='center' justifyContent='start' flexDirection='row'>
                      <Radio checked={value === 'a'} onChange={handleChange} name='radio-buttons' value='a' />
                      <Typography component='div' width={50} height={50}><Payments sx={{ fontSize: 50 }}/></Typography>
                      <Typography mx={2}>Cash On Delivery</Typography>
                    </Box>
                  </Box>
                  <Box px={2} py={1} sx={{ background: '#fff' }}>
                    <Typography ml={2}>Pay when you receive</Typography>
                  </Box>
                </Container>

                <Container>
                  <Box mt={2} p={2} sx={{ background: "#eee"}}>
                    <Box display='flex' alignItems='center' justifyContent='start' flexDirection='row'>
                    <Radio checked={value === 'b'} onChange={handleChange} name='radio-buttons' value='b' />
                      <Typography component='div' width={50} height={50}><Payments sx={{ fontSize: 50 }}/></Typography>
                      <Typography mx={2}>Credit / Debit Card</Typography>
                    </Box>
                  </Box>
                  <Box px={2} py={1} sx={{ background: '#fff' }}>
                    <Typography ml={2}>Pay with credit / debit card</Typography>
                  </Box>
                </Container>

                <Container>
                  <Box mt={4}>
                    <Typography variant='h6'>Voucher</Typography>
                    <Box component='form' mt={2} noValidate autoComplete='off' alignItems='center'>
                      <TextField label='Voucher' variant="standard" sx={{width: '75%'}} />
                      <Button variant="contained" sx={{ marginLeft: '20px', height: '50px', width: '20%', background: '#B692C2'}}>APPLY</Button>
                    </Box>
                  </Box>
                </Container>

                <Container>
                  <Box mt={4}>
                    <Typography variant='h6'>Order Summary</Typography>
                    <Box mt={2} display='flex' flexDirection='row' justifyContent='space-between'>
                      <Typography>Subtotal (1 total)</Typography>
                      <Typography>$29.99</Typography>
                    </Box>
                    <Box mt={2} display='flex' flexDirection='row' justifyContent='space-between'>
                      <Typography>Shipping Fee</Typography>
                      <Typography>$2.00</Typography>
                    </Box>
                    <hr />
                    <Box mt={2} display='flex' flexDirection='row' justifyContent='space-between'>
                      <Typography>Total</Typography>
                      <Typography>$31.99</Typography>
                    </Box>
                  </Box>
                </Container>
                <Box mt={3}>
                  <Button onClick={handleOpen} variant='contained' sx={{ width: '100%', height: 50, background: '#B692C2', color: '#fff', border: 'none'}}>PLACE ORDER NOW</Button>
                </Box>
              </Box>  
          </Box>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ p: 4, position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, 20%)'}}>
          <Card sx={{ borderRadius: 2 }}>
            <CardHeader title={
              <Box display='flex' flexDirection='row' alignItems='center'>
                <Button onClick={handleClose} variant='text'><ArrowBack fontSize='large' sx={{ color: '#000'}} /></Button>
                <Typography variant='h5'>Credit/Debit Card</Typography>
              </Box>
            } sx={{ background: '#E3A5C7'}}/>
            <Typography textAlign='center' sx={{ background: '#DDFFE9', color: '#218A32'}}>Covered by Payment Protection</Typography>
            <CardContent>
              <Box sx={{ boxShadow: 24, p: 4, borderRadius: 3 }}>
                <TextField label='Card number' variant="standard" sx={{ width: '100%'}} />
                <TextField label='Name on card' variant="standard" sx={{ mt: 3, width: '100%'}} />
                <Box display='flex' flexDirection='row' mt={3} pb={2}>
                  <TextField label='Expiration (MM/YY)' variant="standard" sx={{width: '75%'}} />
                  <TextField label='CVV' variant="standard" sx={{width: '20%', marginLeft: '20px'}} />
                </Box>
              </Box>
            </CardContent>
            <CardActions>
            <Button onClick={handleClose} variant='contained' sx={{ width: '100%', height: 50, background: '#B692C2', color: '#fff', border: 'none'}}>CONFIRM</Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </Container>
  )
}

export default App