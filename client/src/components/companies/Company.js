import React, { useEffect, useState, } from 'react';

import axios from '../../utils/webRequests';
import { useParams, } from 'react-router-dom';

const Company = () => {
  const [company, setCompany] = useState({});
  const { id, } = useParams();

  useEffect( () => {
    axios.get(`/api/companies/${id}`)
      .then( res => {
        setCompany(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <h1>{ company.title }</h1>
    </div>
  );
};

export default Company;
