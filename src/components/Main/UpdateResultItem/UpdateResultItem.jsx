import React from 'react';

import s from './UpdateResultItem.module.css';

import { ReactComponent as Succes } from 'com/Common/Icons/success.svg';
import { ReactComponent as Warning } from 'com/Common/Icons/warning.svg';

import { Tooltip } from '@material-ui/core';

function TooltipText({text}) {
  return (
    <div className={s.tooltipText}>
      {text}
    </div>
  )
}

export default function UpdateResultItem({ res }) {
  return (
    <div className={s.item}>
      <div className={s.text}>{res.pathToFile}</div>
      <Tooltip title={<TooltipText text={res.message} />} placement='bottom'>
        <div className={s.icon}>{res.isChanged ? <Succes /> : <Warning />}</div>
      </Tooltip>
    </div>
  );
}
