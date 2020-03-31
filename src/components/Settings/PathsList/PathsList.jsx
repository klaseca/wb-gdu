import React from 'react';
import s from './PathsList.module.css';

import { useTransition, animated } from 'react-spring';

import PathItem from './../PathItem/PathItem';

export default function PathsList({ paths }) {
  const notPath = useTransition(paths.length === 0, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const pathItem = useTransition(paths, item => item.id, {
    from: {
      transform: 'translate3d(0, -40px, 0)',
      opacity: 0
    },
    enter: {
      transform: 'translate3d(0, 0px, 0)',
      opacity: 1
    },
    leave: {
      transform: 'translate3d(0, -40px, 0)',
      opacity: 0,
      height: 0
    }
  });

  return paths.length === 0 ? (
    notPath.map(
      ({ item, props, key }) =>
        item && (
          <animated.div style={props} key={key} className={s.notBox}>
            Not paths
          </animated.div>
        )
    )
  ) : (
    <>
      {pathItem.map(({ item, props, key }) => (
        <animated.div style={props} key={key}>
          <PathItem   
            path={item.path}
            id={item.id}
          />
        </animated.div>
      ))}
    </>
  );
}
