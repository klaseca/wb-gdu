import React from 'react';
import s from './PathsList.module.css';

import PathItem from './../PathItem/PathItem';

export default function PathsList({ paths }) {
  return paths.length === 0 ? (
    <div className={s.notBox}>Not paths</div>
  ) : (
    <>
      {paths.map(({ id, path }) => (
        <PathItem key={id} path={path} id={id} />
      ))}
    </>
  );
}
