import React, { lazy, Suspense, useContext, } from 'react';

import { AuthContext, } from './providers/AuthProvider';
import { Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';

const Companies = lazy(() => import('./components/companies/Companies'));
const Company = lazy(() => import('./components/companies/Company'));
const CompanyForm = lazy(() => import('./components/companies/CompanyForm'));
const JobApplication = lazy(() => import('./components/companies/job_applications/JobApplication'));
const JobApplications = lazy(() => import('./components/job_applications/JobApplications'));
const JobApplicationForm = lazy(() => import('./components/job_applications/JobApplicationForm'));
const Dashboard = lazy(() => import('./components/root/Dashboard'));
const Pricing = lazy(() => import('./components/Pricing'));
const Login = lazy(() => import('./components/Login'));
const Navbar = lazy(() => import('./components/shared/Navbar'));
const Registration = lazy(() => import('./components/Registration'));
const FetchUser = lazy(() => import('./components/FetchUser'));
const NotFound = lazy(() => import('./components/NotFound'));
const AuthRoute = lazy(() => import('./components/AuthRoute'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

const App = () => {
  const { authenticated, } = useContext(AuthContext);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Container>
          <FetchUser>
            <Switch>
              <ProtectedRoute
                exact
                path="/"
                component={Dashboard}
              />
              <Route
                exact
                path="/pricing"
                component={Pricing}
              />
              <AuthRoute
                exact
                path="/login"
                component={Login}
              />
              <AuthRoute
                exact
                path="/register"
                component={Registration}
              />
              <ProtectedRoute
                exact
                path="/companies"
                component={Companies}
              />
              <ProtectedRoute
                exact
                path="/companies/new"
                component={CompanyForm}
              />
              <ProtectedRoute
                exact
                path="/companies/:id"
                component={Company}
              />
              <ProtectedRoute
                exact
                path="/companies/:company_id/applications/new"
                component={JobApplicationForm}
              />
              <ProtectedRoute
                exact
                path="/companies/:company_id/applications/:id"
                component={JobApplication}
              />
              <ProtectedRoute
                exact
                path="/applications"
                component={JobApplications}
              />
              <ProtectedRoute
                exact
                path="/applications/new"
                component={JobApplicationForm}
              />
              <Route
                path="*"
                component={NotFound}
              />
            </Switch>
          </FetchUser>
          <br />
          <br />
          <br />
        </Container>
      </Suspense>
    </>
  );
}

export default App;
