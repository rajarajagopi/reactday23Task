import React from 'react';
import Table from 'react-bootstrap/Table';
function ReadUserProfile({userData}) {
    console.log(userData);
  return (
    <div>
      <h2>User Profile List</h2>
      <hr></hr>
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Education</th>
          <th>Job Role</th>
          <th>Experience</th>
          <th>Address</th>
        </tr>
        
      </thead>
      <tbody>
      <tr>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.id }</div>)}
        </th>  
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.username }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.email }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.phone }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.age }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.gender }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.Education }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.JobRole }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.Exp }</div>)}
        </th>
        <th>
        {userData.map(userData =><div key={userData.id}>{ userData.Address }</div>)}
        </th>
        </tr>
      </tbody>
    </Table>
    </div>
    
  )
}

export default ReadUserProfile;
