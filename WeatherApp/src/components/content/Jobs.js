import React, { useState } from 'react';
import debounceRender from 'react-debounce-render'
import { getUser, getUserid, getJobid, removeUserSession, setJobSession, getUsername, getDate, getLocation, getTemp, getJobdata} from './Common';
import axios from 'axios';

function Jobs(props){
  //const sleep = m => new Promise(r => setTimeout(r,m));
  //await sleep(10000);
  const userid = getUsername();
  const jobid = getJobid();
  //const date = getDate();
  //const location = getLocation();
  //const temperature = getTemp();
  //const jobdetails = getJobdata();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(userid);
  //console.log(jobdetails);


  const handlejobs = () => {
    try {
      setError(null);
      setLoading(true);
      axios.get('http://localhost:3005/getbyid?user_id=' + userid).then(response => {
        setLoading(false);
        //setJobSession(response.data.value.date, response.data.value.location_id, response.data.value.tmax);
        console.log(response.data);
        //setJobSession(response.data);
        //setUserSession(response.data.accessToken);
        //setUserSession(response.data.userid);
        return(
          <div>
            Here are your job details : <br></br>
            Temperature : {response.data[0].tmax}<br></br>
            Date : {response.data[0].date}<br></br>
            Location : {response.data[0].location_id}<br></br>
          </div>
        );

      }).catch(error => {
        setLoading(false);
        //if (error.response.status === 401) setError(error.response.data.message);
        //else setError("Something went wrong. Please try again later.");
        setError("Something went wrong. Please try again later.");
      });
    } catch (ex) {
      console.log(ex.message);
    }

}
/*return Object.keys(this.state.response).map( (row, index) => (
     <TableRow key={index} selected="false">
         <TableRowColumn>Test</TableRowColumn>
         <TableRowColumn>Test</TableRowColumn>
     </TableRow>
)) */
return (
  <div>
  Hi {userid}
  <input type="button" value={loading ? 'Loading...' : 'Fetch Jobs'} onClick={handlejobs} disabled={loading} /><br />

  </div>

);

}

export default debounceRender(Jobs, 10000);
