import React, { Fragment, Component } from 'react';

import { Grid, Container, Button, Tooltip } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Keycloak from 'keycloak-js';

import hero9 from '../../assets/images/hero-bg/hero-8.jpg';

let initOptions = {
    url: 'https://127.0.0.1:8080/auth', realm: 'burst_license', clientId: 'web-client', onLoad: 'login-required'
}

class LandingPage extends Component {

constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak(initOptions);
    // keycloak.init({onLoad: 'login-required'}).success(authenticated => {
    //   this.setState({ keycloak: keycloak, authenticated: authenticated })
    // })
  }

render() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-premium-dark min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-5"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-3" />
          <div className="bg-composed-wrapper--bg bg-red-lights opacity-1" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <Container maxWidth="md" className="pb-4">
              <Grid container spacing={4}>
                <Grid
                  item
                  lg={10}
                  className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center" style={{padding:100}}>
                    <Tooltip arrow placement="top" title="alpha 1.0.0">
                      <span className="badge badge-success px-4 text-uppercase h-auto py-1">
                        Testing version
                      </span>
                    </Tooltip>
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        Transvalor License Burst
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        This is a mock-up version
                      </p>
                      <p className="text-white font-size-lg">
                        
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          to="/DashboardDefault"
                          component={Link}
                          size="large"
                          color="primary"
                          variant="contained"
                          className="m-2 py-3 px-5"
                          title="Dashboard">
                          <span className="btn-wrapper--label">Signin</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                      </div>
                      <small className="d-block pt-4">
                        Powered by Transvalor ©2020
                      </small>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
}

export default LandingPage;
