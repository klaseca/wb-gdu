import React from 'react';

import s from './Card.module.css';

export default function Card({ title, children }) {
  return (
    <div className={s.card}>
      <div className={s.title}>{title}</div>
      {children}
    </div>
  );
}
