import React from 'react';
import s from './InputData.module.css';

import TextArea from './../TextArea';
import ManualServers from './../ManualServers/ManualServers';

import { connect } from 'react-redux';
import { setValue } from 'app/store/main/mainActions';

function InputData({ value, setValue }) {
  return (
    <>
      <ManualServers />

      <div className={s.box}>
        <TextArea
          multiline
          label='New data'
          margin='normal'
          variant='filled'
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
}

const mapStateToProps = ({ main: { value } }) => ({ value });

const mapDispatchToProps = {
  setValue
};

export default connect(mapStateToProps, mapDispatchToProps)(InputData);
