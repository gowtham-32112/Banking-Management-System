import React from 'react';
import './Dashboard.css';
import MoneyIcon from '@mui/icons-material/Money';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <><div><center><h1>BANKING & FINANCE MANAGEMENT SYSTEM</h1></center></div>
    <div className='dashboard-bg'></div>
    <div className="deposit-button-container">
      
        <Button component={Link}
          type="submit"
          fullWidth
          variant="contained"
          to='/Deposit'
          sx={{ width: '200px', height: '60px', backgroundColor: '#b388ff', color: '#000000', fontSize: '1.2rem' }}
        >
          Deposit
        </Button>
      <div className="Profile">
      <Button component={Link}
          type="submit"
          fullWidth
          variant="contained"
          to='/Profile'
          sx={{ width: '200px', height: '60px', backgroundColor: '#b388ff', color: '#000000', fontSize: '1.2rem' }}
        >
          Profile
      </Button> 
      <div className="Dashboardreal">
      <Button component={Link}
          type="submit"
          fullWidth
          variant="contained"
          to='/Dashboard'
          sx={{ width: '200px', height: '60px', backgroundColor: '#b388ff', color: '#000000', fontSize: '1.2rem' }}
        >
          Dashboard
      </Button>   
      </div>  
      </div>
      </div></>
  )
}

export default Dashboard