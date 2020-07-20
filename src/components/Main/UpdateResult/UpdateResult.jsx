import React, { useState } from 'react';

import s from './UpdateResult.module.css';
import UpdateResultItem from 'com/Main/UpdateResultItem/UpdateResultItem';

import { AppBar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { setIsUpdated } from 'store/main/mainActions';

function EmptyResult() {
  return <div className={s.empty}>No result</div>;
}

const STabs = withStyles({
  root: {
    backgroundColor: '#212121',
  },
  indicator: {
    backgroundColor: '#d0ab5a',
  },
})(Tabs);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      className={s.tabPanel}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export default function UpdateResult() {
  const { successResult, failResult } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={s.box}>
      <AppBar position='static'>
        <STabs
          className={s.tabs}
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Successed update' {...a11yProps(0)} />
          <Tab label='Failed update' {...a11yProps(1)} />
        </STabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {successResult.length ? (
          successResult.map((res, i) => <UpdateResultItem res={res} key={i} />)
        ) : (
          <EmptyResult />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {failResult.length ? (
          failResult.map((res, i) => <UpdateResultItem res={res} key={i} />)
        ) : (
          <EmptyResult />
        )}
      </TabPanel>
      <button className={s.btn} onClick={() => dispatch(setIsUpdated(false))}>
        OK
      </button>
    </div>
  );
}
