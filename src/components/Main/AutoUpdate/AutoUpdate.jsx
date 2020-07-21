import React from 'react';
import s from './AutoUpdate.module.css';
import ServersBox from 'com/Main/ServersBox/ServersBox';
import UpdateResult from 'com/Main/UpdateResult/UpdateResult';

import { connect } from 'react-redux';
import {
  setIsToast,
  setToastData,
  setIsUpdating,
  setIsUpdated,
  setUpdateResult,
} from 'app/store/main/mainActions';

import sh from 'app/utils/settings-handler';

function AutoUpdate({
  servers,
  singlePaths,
  multiPaths,
  setIsToast,
  setToastData,
  isUpdating,
  setIsUpdating,
  isUpdated,
  setIsUpdated,
  setUpdateResult,
}) {
  const updateData = async () => {
    try {
      const activeServers = servers
        .filter((server) => server.checked)
        .map(({ name }) => name);

      if (activeServers.length === 0) {
        setToastData({ text: 'Select needed servers', severity: 'warning' });
        setIsToast(true);
      } else {
        setIsUpdating(true);

        const res = await Promise.all(
          activeServers.map((name) =>
            fetch(
              `https://raw.githubusercontent.com/Levak/warfacebot/master/cfg/server/${name}.cfg`
            ).then((data) => data.text())
          )
        );

        const data = activeServers.map((server, i) => [server, res[i]]);

        sh.loadPaths(singlePaths, multiPaths);

        const {
          isSuccess,
          successResult,
          failResult,
        } = await sh.updateGameData(data);

        setIsUpdating(false);

        if (isSuccess) {
          setUpdateResult({ successResult, failResult });
          setIsUpdated(true);
        } else {
          setToastData({
            text: 'Check the paths are correct',
            severity: 'error',
          });
          setIsToast(true);
        }
      }
    } catch (error) {
      setIsUpdating(false);
      setToastData({ text: 'Network error', severity: 'error' });
      setIsToast(true);
    }
  };

  return (
    <>
      {!(isUpdating || isUpdated) && <ServersBox />}
      <div className={s.box}>
        {isUpdating ? (
          <>
            <div className={s.cssloadContainer}>
              <div className={s.cssloadWhirlpool}></div>
            </div>
            <div className={s.updating}>Updating</div>
          </>
        ) : isUpdated ? (
          <UpdateResult />
        ) : (
          <div className={s.btnBox}>
            <button className={s.btn} onClick={updateData}>
              Check update
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = ({
  settings: { servers, singlePaths, multiPaths },
  main: { isUpdating, isUpdated },
}) => ({
  servers,
  singlePaths,
  multiPaths,
  isUpdating,
  isUpdated,
});

const mapDispatchToProps = {
  setIsToast,
  setToastData,
  setIsUpdating,
  setIsUpdated,
  setUpdateResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoUpdate);
