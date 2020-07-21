import React from 'react';
import s from './MultiBlockPanel.module.css';

import CardDut from '../CardDut/CardDut';
import CardAss from '../CardAss/CardAss';
import CardMss from '../CardMss/CardMss';
import CardSp from '../CardSp/CardSp';

export default function MultiBlockPanel() {
  return (
    <div className={s.box}>
      <CardDut />
      <CardAss />
      <CardMss />
      <CardSp />
    </div>
  );
}
