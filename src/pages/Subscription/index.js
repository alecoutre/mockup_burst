import React, { Fragment } from 'react';

import { PageTitleSub } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabsBasic from '../../example-components/Tabs/TabsBasic';

import {
  Avatar,
  IconButton,
  Box,
  Checkbox,
  Card,
  CardContent,
  Button
} from '@material-ui/core';

import Subscription_Account from '../Subscription_account';
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link 
} from "react-router-dom";
export default function Buttons() {
  let {id} = useParams()
  let { path, url } = useRouteMatch();
  return (
    <Fragment>
      <PageTitleSub
        titleHeading={"Subscription - "+ id}
        titleDescription=""
      />
    </Fragment>
  );
}
