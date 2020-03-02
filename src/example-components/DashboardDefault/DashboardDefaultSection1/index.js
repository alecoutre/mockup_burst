import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApexChartsArea from '../../../example-components/ApexCharts/ApexChartsArea';
import { ExampleWrapperSimple } from '../../../layout-components';

import { Grid, Card, CardContent, Divider,
  IconButton,
  LinearProgress,
  Button,
  Tooltip } from '@material-ui/core';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chart30Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3c44b1'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      categories: ["01-fev", "02-fev", "03-fev", "04-fev", "05-fev", "06-fev","07-fev", "08-fev", "09-fev", "10-fev", "11-fev", "12-fev", "13-fev", "14-fev"],
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: true
    }
  };
  const chart30Data = [
    {
      name: 'Tokens',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart31Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart31Data = [
    {
      name: 'Tokens',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-royal border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Token used overall
                  </small>
                  <span className="font-size-xxl mt-1">5869</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">15.4%</span>
                <span className="text-white-50">increase this month</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-royal text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Computation time overall
                  </small>
                  <span className="font-size-xxl mt-1">230 274</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['fas', 'microchip']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">7.4%</span>
                <span className="text-white-50">increase this month</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box bg-royal text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Users
                  </small>
                  <span className="font-size-xxl mt-1">35</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-white mr-1"
                />
                <span className="text-white px-1">+15</span>
                <span className="text-white-50">users this month</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
          <div className="card-header pr-2">
            <div className="card-header--title font-weight-bold">Subscription - #1 Pay-per-use</div>
              <div className="card-header--actions">
                <Tooltip arrow title="Table">
                  <IconButton size="small" color="primary" className="mr-3">
                    <FontAwesomeIcon icon={['fas', 'list']} />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-0">
              
              <Grid container spacing={4} className="mt-4">
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">13</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">254</b>
                      <span className="text-black-50 d-block">tokens</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['fas', 'receipt']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">90 693€</b>
                      <span className="text-black-50 d-block">costs</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="ext-center">
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart30Options}
                  series={chart30Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
              <div className="card-footer p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </span>
                <span className="btn-wrapper--label">Generate report</span>
              </Button>
            </div>
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
          <div className="card-header ">
            <div className="card-header--title font-weight-bold">Subscription - #2 Forge unlimited</div>
              <div className="card-header--actions">
                <Tooltip arrow title="Table">
                  <IconButton size="small" color="primary" className="mr-3">
                    <FontAwesomeIcon icon={['fas', 'list']} />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-0">
            <div className="card-body pb-1">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">5</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">352</b>
                      <span className="text-black-50 d-block">tokens</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">9 693</b>
                      <span className="text-black-50 d-block">hours</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart31Options}
                  series={chart31Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
            <Divider />
            <div className="my-2 text-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-down']}
                className="text-danger"
              />
              <span className="text-danger px-1">15.4%</span>
              <span className="text-black-50">hours this month</span>
            </div>
            <div className="card-footer p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </span>
                <span className="btn-wrapper--label">Generate report</span>
              </Button>
            </div>
            </CardContent>
          </Card>
          
        </Grid>
      </Grid>
    </Fragment>
  );
}
