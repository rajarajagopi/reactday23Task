import axios from 'axios';
import React, { useEffect, useState }from 'react';

function UpdateUser({selectedoption,userData,setUserData}) {

    const [selectedUserData,setSelectedUserData]=useState(null);
    const [editedUserName,setEditedUserName]= useState('');
    const [editedEmail,setEditedEmail]=useState('');
    const [editedPhone,setEditedPhone]=useState('');
    const [editedAge,setEditedAge]=useState('');
    const [editedGender,setEditedGender]=useState('');
    const [editedEducation,setEditedEducation]=useState('');
    const [editedJobRole,setEditedJobRole]=useState('');
    const [editedExp,setEditedExp]=useState('');
    const [editedAddress,setEditedAddress]=useState('');

    const fetchUserDB =async () => {
        try {
            if (selectedoption != 'select an ID') {
                const response = await axios.get(`http://localhost:3000/userData/${selectedoption}`);
                console.log(response.data);
                if(response.data){
                    setSelectedUserData(response.data);
                    setEditedUserName(response.data.username);
                    setEditedEmail(response.data.email);
                    setEditedPhone(response.data.phone);
                    setEditedAge(response.data.age);
                    setEditedGender(response.data.gender);
                    setEditedEducation(response.data.Education);
                    setEditedJobRole(response.data.JobRole);
                    setEditedExp(response.data.Exp);
                    setEditedAddress(response.data.Address);

                }
            }

        }
        catch(error){
            console.error('Error fetching the user Data:', error);
        }
    }
    
    useEffect(() => {
        fetchUserDB();
    },[selectedoption]);

    const updateuserDetails = (event) => {
        event.preventDefault();
        console.log('Updating The User Details....');
        let userData = {
            id:selectedUserData.id,
            username:editedUserName,
            email:editedEmail,
            phone:editedPhone,
            age:editedAge,
            gender:editedGender,
            Education:editedEducation,
            JobRole:editedJobRole,
            Exp:editedExp,
            Address:editedAddress,

        }
        axios
             .put(`http://localhost:3000/userData/${selectedUserData.id}`,userData)
            .then(response => {
                console.log(response);
                console.log('User Profile updated successfully');
                let  updatedUser = userData.filter(u => u.id !== userData.id);
                updatedUser.concat(userData);
                setUserData(updatedUser);

            })
            .catch(error => {
                console.log('Error Updating User Details:',error);
            })
            
        
        }

  return (
    <div>
      <h3>Update User Form</h3>
      {
        !selectedUserData ? ( <p>Loading User Details...</p>) :
         (
        <form onSubmit={updateuserDetails}>
       <label>UserName:&nbsp;&nbsp;&nbsp;&nbsp;
        <input value={editedUserName} onChange={(e)=>setEditedUserName(e.target.value)}>
        </input></label><br /><br />
        <label>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedEmail} onChange={(e)=>setEditedEmail(e.target.value)} ></input>
        </label><br /><br />
        <label>
            Phone No:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedPhone} onChange={(e)=>setEditedPhone(e.target.value)} ></input>
        </label><br /><br />
        <label>
            Age:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedAge} onChange={(e)=>setEditedAge(e.target.value)} ></input>
        </label><br /><br />
        <label>
            Gender:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedGender} onChange={(e)=>setEditedGender(e.target.value)} ></input>
        </label><br /><br />
        <label>
            Education:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedEducation} onChange={(e)=>setEditedEducation(e.target.value)} ></input>
        </label><br /><br />
        <label>
            Job Role:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedJobRole} onChange={(e)=>setEditedJobRole(e.target.value)} ></input>
        </label><br /><br />
        <label>
            Exp:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedExp} onChange={(e)=>setEditedExp(e.target.value)} ></input>
            
        </label>
        <label>
            Address:&nbsp;&nbsp;&nbsp;&nbsp;<input value={editedAddress} onChange={(e)=>setEditedAddress(e.target.value)} ></input>
            
        </label><br />
        <button type='submit'>Update User Profile</button>

      </form>
         )
      }
      
    </div>
  )
}

export default UpdateUser;
