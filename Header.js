import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography,  } from '@mui/material'
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const[value, setValue]=useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#7c4dff'}} position='sticky'>
        <Toolbar>
          <AccountBalanceWalletTwoToneIcon/>
            <Typography>Banking & Finance Management System</Typography>
            <Tabs textColor='inherit' indicatorColor='primary'  sx={{ml: "auto"}} value={value} onChange={(e,val)=>setValue(val)}>
              <Tab LinkComponent={NavLink} to='/Dashboard' label='Dashboard'/>
              <Tab LinkComponent={NavLink} to='/SignUp' label='SignUp'/>
              <Tab LinkComponent={NavLink} to='/SignIn' label='SignIn'/>
              <Tab LinkComponent={NavLink} to='/Deposit' label='Deposit'/>
              {/* <Tab LinkComponent={NavLink} to='/Appointment' label='Appointment'/> */}
              <Tab LinkComponent={NavLink} to='/FetchRegistrations' label='FetchRegistrations'/>
            </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
  
}

export default Header