import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Box, Typography, Tabs, Tab } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
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
  }
}));

export default function LivePreviewExample() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

        <Tabs
          value={value}
          scrollButtons="auto"
          variant="scrollable"
          onChange={handleChange}
          aria-label="simple tabs example">
          <Tab label="Administration" />
          <Tab label="Credential" />
          <Tab label="Notification" />
          <Tab label="Rules" />
          <Tab label="Activity" />
          <Tab label="Action" />
        </Tabs>

      <TabPanel value={value} index={0}>
        Administration
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
