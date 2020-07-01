import React, { useEffect, useState, } from 'react';

import { useParams, } from 'react-router-dom';

import axios from '../../../utils/webRequests';

const JobApplication = () => {
  const [jobApplication, setJobApplication] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { company_id, id, } = useParams();

  useEffect( () => {
    axios.get(`/api/companies/${company_id}/job_applications/${id}`)
      .then( res => {
        setJobApplication(res.data);
        setLoaded(true);
      })
      .catch( err => {
        // TODO: Error Handling
        console.log(err);
      })
  }, []);

  if (loaded) {
    return (
      <div>
        <h1>{ jobApplication.company.title } - { jobApplication.position }</h1>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
};

export default JobApplication;
