import React from 'react'

const Profiles = (props) => (
  <div className="profile">
  {props.users.map((user) => 
  <div key={user.id} className="current-user">
    <li> {user.firstname} {user.lastname} {user.username} </li>
   </div>
   )}
</div>);

export default Profiles;