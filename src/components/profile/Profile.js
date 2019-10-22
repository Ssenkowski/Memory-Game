import React from 'react'

const Profiles = (props) => (
  <div className="profiles">
  {props.profiles.map((profile) => 
  <div key={profile.id} className="current-user">
    <li> {profile.firstname} {profile.lastname} {profile.username} </li>
   </div>
   )}
</div>);

export default Profiles;