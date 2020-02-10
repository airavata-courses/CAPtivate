import React from 'react';
import { getUser, removeUserSession, getToken } from './Utils/Common';

function Dashboard(props) {
  const user = getUser();
  const token =getToken();
  //harcoded to a known username to test signin
  if(token == 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTgxMzIzMDIzLCJleHAiOjE1ODE5Mjc4MjN9.jli89nUrp70wCDA4AwxG1VnWO0WzLFrA4dx7gDYBZ_X3MSU5tr42WvEAoMoiuAShAt8OFUI6ABcGnjSSZZkc9A' ){
    return <div className="content">Sucessfull...!!</div>
  }
  else{
    return <div className="content">Failed...!!</div>
  }

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      //Welcome {user.name}!<br /><br />
      Welcome signed in successfully!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
