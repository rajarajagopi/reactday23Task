
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import ReadUserProfile from './components/ReadUserProfile';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';



function App() {
  const [userData, setUserData] = useState([]);
  const [newUserName,setNewUserName]=useState('');
  const [newEmailId,setNewEmailId]=useState('');
  const [newPhoneno,setNewPhoneno]=useState('');
  const [newAge,setNewAge]=useState('');
  const [newGender,setNewGender]=useState('');
  const [newEducation,setNewEducation]=useState('');
  const [newJobRole,setNewJobRole]=useState('');
  const [newExp,setNewExp]=useState('');
  const [newAddress,setNewAddress]=useState('');
  
  

  const fetchUserDB = async () => {
    try {
      const response = await axios.get('http://localhost:3000/userData/');
      setUserData(response.data);
    } catch (error) {
      console.log('Failed to fetch notes:', error);
    }
  }
  
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      fetchUserDB();
    }

    return () => {
      isMounted = false;
    }

  }, []);

  const AddNewUser = (event) => {
    event.preventDefault();
    // create a new note object
    let userObject = {
      username: newUserName,
      email:newEmailId,
      phone:newPhoneno,
      age:newAge,
      gender:newGender,
      Education:newEducation,
      JobRole:newJobRole,
      Exp:newExp,
      Address:newAddress,
      
    }
    
    console.log('adding new User...');
    axios
      .post('http://localhost:3000/userData/', userObject)
      .then(response => {
        console.log('New User added successfully...');
      })
    // clear the inputs
    setNewUserName('');
    setNewEmailId('');
    setNewPhoneno('');
    setNewAge('');
    setNewGender('');
    setNewEducation('');
    setNewJobRole('');
    setNewExp('');
    setNewAddress('');
    fetchUserDB();
  }


  const padding = {
    paddingRight: 15,
  };


  return (
    <div>
      <h1>User Profile Data with CRUD Operation</h1>
      <hr></hr>
      <Router>
        <div>
        <Link to="/" style={padding}>DashBoard</Link>
        <Link to="/readUser" style={padding}>UserProfile</Link>
        <Link to="/createuser" style={padding}>Create User</Link>
        <Link to="/editUser" style={padding}>Edit User</Link>
        <Link to="/deleteUser" style={padding}>Delete User</Link>
       
       </div>

      <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/readUser' element={<ReadUserProfile userData={userData}/>} />
      <Route path='/createuser' element={<CreateUser AddNewUser={AddNewUser} newUserName={newUserName} newEmailId={newEmailId} newPhoneno={newPhoneno} newAge={newAge} newGender={newGender} newEducation={newEducation} newJobRole={newJobRole} newExp={newExp} newAddress={newAddress}
      setNewUserName={setNewUserName} setNewEmailId={setNewEmailId} setNewPhoneno={setNewPhoneno} setNewAge={setNewAge} setNewGender={setNewGender} setNewEducation={setNewEducation} setNewJobRole={setNewJobRole} setNewExp={setNewExp} setNewAddress={setNewAddress}/>} />
      <Route path='/editUser' element={<EditUser userData={userData} setUserData={setUserData}/>} />
      <Route path='/deleteUser' element={<DeleteUser userData={userData} setUserData={setUserData}/>} />
      
      </Routes>
    </Router>
    

    </div>
  )
}

export default App;



