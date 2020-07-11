import React, { useEffect, useState, } from 'react';

import axios from '../../utils/webRequests';
import styled from 'styled-components';

import { Link, } from 'react-router-dom';
import { Button, } from 'semantic-ui-react';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect( () => {
    axios.get('/api/companies')
      .then( res => {
        setCompanies(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <br />
      <Link to="/companies/new">
        <Button color="blue">New Company</Button>
      </Link>
      <br />
      <br />
      {
        companies.map( company => (
          <Link key={company.id} to={`/companies/${company.id}`}>
            <Item>
              <img
                src={company.logo_url}
                alt={company.title}
                style={{ height: "100px", }}
              />
              <h3>{ company.title }</h3>
            </Item>
          </Link>
        ))
      }
    </div>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

export default Companies;
