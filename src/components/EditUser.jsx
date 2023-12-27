import React,{ useState } from 'react';
import UpdateUser from './UpdateUser.jsx';
function EditUser( { userData, setUserData }) {

    const [selectedoption,setSelectedoption] = useState('Select an ID');
    const searchbyName = (event) =>
    {
        setSelectedoption(event.target.value);
    }
  return (
    <div>
      <h2>Edit UserDetails</h2>
      <label>
        Search BY:&nbsp;&nbsp;&nbsp;
        <select onChange={searchbyName} value={selectedoption}>

            <option disabled>{'select an ID'}</option>
            {
                userData.map(user =>
                    <option key={user.id}>{user.id}</option>
                    )
            }
        </select>
        
      </label>
      <hr></hr>
      <div>
        {selectedoption !== 'select an ID' && <UpdateUser selectedoption={selectedoption} userData={userData} setUserData={setUserData}/>}
      </div>

    </div>
  )
}

export default EditUser;
