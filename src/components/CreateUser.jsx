import React, { useEffect } from 'react';

function CreateUser({AddNewUser,newUserName,setNewUserName,newEmailId,setNewEmailId,newPhoneno,setNewPhoneno,newAge,setNewAge,newGender,setNewGender,newEducation,setNewEducation,newJobRole,setNewJobRole,newExp,setNewExp,newAddress,setNewAddress}) {
   
  return (
    <div>
      <h2>Add New User Profile</h2>
      <hr></hr>
      <form onSubmit={AddNewUser}>
        <label>UserName :</label>&nbsp;&nbsp;&nbsp;<input onChange={(e) => setNewUserName(e.target.value)} value={newUserName} required placeholder='Enter User Name...'></input><br /><br />
        <label>Email ID :</label>&nbsp;&nbsp;&nbsp;<input onChange={(e) => setNewEmailId(e.target.value)} value={newEmailId} required placeholder='Enter Emai id...'></input><br /><br />
        <label>Phone No :</label>&nbsp;&nbsp;&nbsp;<input onChange={(e) => setNewPhoneno(e.target.value)} value={newPhoneno} required placeholder='Enter Phone No...'></input><br /><br />
        <label>Age :</label>&nbsp;&nbsp;&nbsp;<input onChange={(e) => setNewAge(e.target.value)} value={newAge} required placeholder='Enter Age...'></input><br /><br />
        <label>Gender</label>&nbsp;&nbsp;&nbsp;
        <select onChange={(e) => setNewGender(e.target.value)} value={newGender} required>
        <option disabled>--select--</option>
            <option>Male</option>
            <option>Female</option>
        </select><br /><br />
        <label>Education :</label>&nbsp;&nbsp;&nbsp;
        <input onChange={(e) => setNewEducation(e.target.value)} value={newEducation} required placeholder='Education...'></input><br /><br />
        <label>Job Role :</label>&nbsp;&nbsp;&nbsp;
        <select onChange={(e) => setNewJobRole(e.target.value)} value={newJobRole} required>
        <option disabled>--select--</option>
            <option>Front End Developer</option><option>Back End Developer</option><option>Full Stack Developer</option><option>.Net Developer</option><option>Five Years</option>
            <option>Php Developer</option><option>Java Developer</option><option>Ui/Ux Designer</option><option>Data Sceintist</option><option>Digital Marketing</option>
        </select><br /><br />
        <label>Experience:</label>&nbsp;&nbsp;&nbsp;
        <select onChange={(e) => setNewExp(e.target.value)} value={newExp} required>
        <option disabled>--select--</option>
            <option>One Year</option><option>Two Years</option><option>Three Years</option><option>Four Years</option>
            <option>Six years</option><option>Seven Years</option><option>Eight Years</option><option>Nine Years</option><option>Ten Years</option>
        </select><br /><br />
        <label>Address:</label>&nbsp;&nbsp;&nbsp;
        <select onChange={(e) => setNewAddress(e.target.value)} value={newAddress} required>
        <option disabled>--select--</option>
            <option>Ariyalur</option><option>Chengalpattu</option><option>Chennai</option><option>Coimbatore</option><option>Cuddalore</option>
            <option>Dharmapuri</option><option>Dindigul</option><option>Erode</option><option>Kallakurichi</option><option>Kanchipuram</option>
            <option>Kanniyakumari</option><option>Karur</option><option>Krishnagiri</option><option>Madurai</option><option>Mayiladuthurai</option>
            <option>Nagapattinam</option><option>Namakkal</option><option>Nilgiris</option><option>Perambalur</option><option>Pudukkottai</option>
            <option>Ramanathapuram</option><option>Ranipet</option><option>Salem</option><option>Sivaganga</option><option>Kanchipuram</option>
            <option>Tenkasi</option><option>Thanjavur</option><option>Theni</option><option>Thoothukudi</option><option>Tiruchirappalli</option>
            <option>Tirunelveli</option><option>Tirupathur</option><option>Tiruppur</option><option>Tiruvallur</option><option>Tiruvannamalai</option>
            <option>Tiruvarur</option><option>Vellore</option><option>Viluppuram</option><option>Virudhunagar</option>
        </select><br /><br />
        <hr>
        </hr>
        <button type='submit'>Add New User</button>
      </form>
    </div>
  )
}

export default CreateUser
