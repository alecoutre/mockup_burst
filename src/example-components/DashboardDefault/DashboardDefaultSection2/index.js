import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApexChartsArea from '../../../example-components/ApexCharts/ApexChartsArea';
import { ExampleWrapperSimple } from '../../../layout-components';
import {
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Grid,
  Tooltip
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
    <Grid container spacing={4}>
    <Grid item xs={12} sm={6}>
          <ExampleWrapperSimple sectionHeading="Tokens consumption">
            <ApexChartsArea />
          </ExampleWrapperSimple>
        </Grid>
     <Grid item xs={12} sm={6}>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title font-weight-bold">Active session</div>
          <div className="card-header--actions">
            
          </div>
        </div>
        <CardContent className="p-3">
          <div className="table-responsive">
            <table className="table table-borderless table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="text-left">Project</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Progress</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Thermal_Steady_State
                      </a>
                      <span className="text-black-50 d-block">
                        Shanelle Wynn
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Running</div>
                  </td>
                  <td>
                    <LinearProgress value={55} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Rivet_crimping
                      </a>
                      <span className="text-black-50 d-block">
                        Shanelle Wynn
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Running</div>
                  </td>
                  <td>
                    <LinearProgress value={55} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Spindle_-_Chained_Simulations
                      </a>
                      <span className="text-black-50 d-block">
                        Regan Norris
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Running</div>
                  </td>
                  <td>
                    <LinearProgress value={67} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Austenitization
                      </a>
                      <span className="text-black-50 d-block">
                        Beck Simpson
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Running</div>
                  </td>
                  <td>
                    <LinearProgress value={39} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        <div className="card-footer d-flex justify-content-between">
          <div>
            <Button
              size="small"
              variant="contained"
              className="mr-3"
              color="primary">
              View all sessions
            </Button>
          </div>
        </div>
      </Card>
      </Grid>
      </Grid>
    </Fragment>
  );
}
