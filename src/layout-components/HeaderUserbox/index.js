import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import avatar5 from '../../assets/images/avatars/avatar5.jpg';

export default function HeaderUserbox() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profile, setProfile] = React.useState({given_name:'',email:''})

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    window.appEmitter.on("auth", () => window.keycloak.loadUserInfo().success((d) => setProfile(d) ))
  }, [window.keycloak]); 

  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <div className="text-center  d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xl"
                    />
                  </div>

        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">{profile.given_name}</div>
          <span className="text-white-50">{profile.email}</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
 <div className="text-center  d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['fas', 'user-alt']}
                      className="font-size-xl"
                    />
                  </div>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                {profile.given_name}
              </div>
              <span className="text-black-50 text-center">
                {profile.email}
              </span>
            </div>
            <Divider className="w-100 mt-2" />
            <ListItem button onClick={() => window.keycloak.accountManagement()}>Profile settings</ListItem>
            <Divider className="w-100" />
            <ListItem button onClick={() => window.keycloak.logout()}>Logout</ListItem>
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}
