import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Paper,
  Tabs,
  Tab,
  Typography,
  Box,
  TextField,
  Switch,
  FormControlLabel,
  FormGroup,
  Grid,
  Divider,
  Button,
  Card,
  CardContent,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';

import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import { makeStyles } from '@material-ui/core/styles';

let data_activity = [
  {
    username: "smith",
    project: "projet1",
    software: "FORGE NxT 3.0",
    count: 48,
    duration: 534,
    start_time: "2020-01-02T15:38Z",
    end_time: "2020-01-03T08:04Z"
  }
]
let data_action = [
  {
    action: "CHECKOUT",
    username: "smith",
    project: "projet1",
    feature: "FORGE3_UpTo4",
    version_major: "2019",
    count: 48,
    date: "2020-01-02T15:38Z",
  },
  {
    action: "CHECKIN",
    username: "smith",
    project: "projet1",
    feature: "FORGE3_UpTo4",
    version_major: "2019",
    count: 48,
    date: "2020-01-03T08:04Z",
  },
]


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Fragment p={1}>{children}</Fragment>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  element: {
    // padding: theme.spacing(2),
  }
}));

function PageTitleSub(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Paper square elevation={2} className="app-page-title" style={{padding: "2rem 6rem 0rem 2rem", "display": "block"}}>
        <div>
          <div className="app-page-title--first">
            <div className="app-page-title--heading">
              <h1>{props.titleHeading}</h1>
              <div className="app-page-title--description">
                {props.titleDescription}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="speedial-wrapper">

          </div>
        </div>
        <div>
        <Tabs
          value={value}
          scrollButtons="auto"
          variant="scrollable"
          onChange={handleChange}
          aria-label="simple tabs example">
          <Tab label="Administration" />
          <Tab label="Credentials" />
          <Tab label="Notification" />
          <Tab label="Rules" />
          <Tab label="Activity" />
          <Tab label="Action" />
        </Tabs>
        </div>
      </Paper>

      <TabPanel value={value} index={0}>
      <Grid container spacing={3} justify="flex-start" alignItems="baseline">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header pr-2">
              <div className="card-header--title font-weight-bold">Contract information</div>
              <div className="card-header--actions">
                
              </div>
            </div>
            <CardContent className="p-3">
              <FormGroup row>
                <Grid container spacing={3} justify="flex-start" alignItems="baseline">
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField className={classes.element} fullWidth label="Credit" defaultValue="0" InputProps={{readOnly: true}} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField className={classes.element} fullWidth label="Type" defaultValue="PayPerUse" InputProps={{readOnly: true}} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField className={classes.element} fullWidth label="Expiration Date" defaultValue="31/01/2021" InputProps={{readOnly: true}} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControlLabel className={classes.element} control={ <Switch  checked value="checked" />} label="Enabled" />
                  </Grid>
                </Grid>
              </FormGroup>
            </CardContent>
          </Card>
        </Grid>
       </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3} justify="flex-start" alignItems="baseline">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card className="card-box mb-4">
              <CardContent className="p-3">
                <FormGroup row>
                 <Grid container spacing={3} justify="flex-start" alignItems="baseline">
                  <Grid item xs={12} sm={12}>
                    <TextField className={classes.element} fullWidth label="Subscription ID" defaultValue="20471e06-1b4c-4ab8-afc3-e1abf6f71a18" InputProps={{readOnly: true}} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField  className={classes.element} fullWidth label="Secret" defaultValue=" " InputProps={{readOnly: true}} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button className={classes.element}  variant="contained" color="secondary">Regenerate a secret string</Button>
                  </Grid>
                </Grid>
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3} justify="flex-start" alignItems="baseline">
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Card className="card-box mb-4">
              <CardContent className="p-3">
                <FormGroup row>
                 <Grid container spacing={3} justify="flex-start" alignItems="baseline">
                    <Grid item xs={12} sm={12}>
                      <Grid container spacing={5}>
                          <Grid item xs={12} sm={4}>
                            <FormControl >
                              <InputLabel>Contact</InputLabel>
                              <Select value={0}>
                                <MenuItem value={0}>smith.rogers@gmail.com</MenuItem>
                                <MenuItem value={1}>Edit contact</MenuItem>
                                <MenuItem value={1}>Add new contact...</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <FormControlLabel className={classes.element} control={<Checkbox checked value="checked" />} label="At checkout" />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <FormControlLabel className={classes.element} control={<Checkbox checked value="checked" />} label="At checkin" />
                          </Grid>
                      </Grid>
                    </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button className={classes.element}  variant="contained" color="secondary">New notification</Button>
                   </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button className={classes.element}  variant="contained" color="primary" disabled>Save</Button>
                  </Grid>
                </Grid>
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={3} justify="flex-start" alignItems="baseline">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card className="card-box mb-4">
              <CardContent className="p-3">
                <Typography>If there are no rules defined, all request from any user/IP address will be accept.</Typography>
                <br/>
                <FormGroup row>
                 <Grid container spacing={3} justify="flex-start" alignItems="baseline">
                   <Grid item xs={12} sm={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={2}>
                          <FormControl >
                            <InputLabel>Action</InputLabel>
                            <Select value={0}>
                              <MenuItem value={0}>ALLOW</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField  className={classes.element} fullWidth label="IP Address" defaultValue="90.80.235.23[7-8]" InputProps={{readOnly: true}} />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                          <Button className={classes.element}  variant="contained" color="primary">Delete</Button>
                        </Grid>
                      </Grid>
                    </Grid>
                   <Grid item xs={12} sm={2}>
                    <Button className={classes.element}  variant="contained" color="secondary">New rule</Button>
                   </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button className={classes.element}  variant="contained" color="primary" disabled>Save</Button>
                  </Grid>
                </Grid>
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TableContainer className="mb-4" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Software</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Start date</TableCell>
              <TableCell>End date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data_activity.map(row => (
              <TableRow key={row.username}>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.software}</TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.start_time}</TableCell>
                <TableCell>{row.end_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TableContainer className="mb-4" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Action</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Feature</TableCell>
              <TableCell>Major version</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data_action.map(row => (
              <TableRow key={row.username}>
                <TableCell>{row.action}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.feature}</TableCell>
                <TableCell>{row.version_major}</TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
    </Fragment>
  );
}

export default PageTitleSub;