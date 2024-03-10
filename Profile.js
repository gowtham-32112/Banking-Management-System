import React from 'react';
import './Profile.css';

const Profile = () => {
  const profileDetails = {
    name: 'Tony',
    age: 30,
    email: 'Tony@example.com',
    occupation: 'Software Engineer',
    location: 'New York, USA',
  };

  return (
    <div className="Profile-bg">
      <div className='profile-container'>
        <div className='profile-card'>
          <div className='profile-header'>
            <h1>Profile Details</h1>
          </div>
          <div className='profile-details'>
            <div className='detail'>
              <span className='label'>Name:</span>
              <span className='value'>{profileDetails.name}</span>
            </div>
            <div className='detail'>
              <span className='label'>Age:</span>
              <span className='value'>{profileDetails.age}</span>
            </div>
            <div className='detail'>
              <span className='label'>Email:</span>
              <span className='value'>{profileDetails.email}</span>
            </div>
            <div className='detail'>
              <span className='label'>Occupation:</span>
              <span className='value'>{profileDetails.occupation}</span>
            </div>
            <div className='detail'>
              <span className='label'>Location:</span>
              <span className='value'>{profileDetails.location}</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
