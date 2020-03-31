import React from 'react';
import s from './AutoUpdate.module.css';
import ServersBox from './../ServersBox/ServersBox';

import { connect } from 'react-redux';
import { setIsToast, setToastData } from 'app/store/main/mainActions';

import sh from 'app/utils/settings-handler';

function AutoUpdate({
  servers,
  setIsToast,
  setToastData
}) {
  const updateData = async () => {
    const activeServers = servers
      .filter(server => server.checked)
      .map(({ name }) => name);

    if (activeServers.length === 0) {
      setToastData({ text: 'Select needed servers', severity: 'warning' });
      setIsToast(true);
    } else {
      const res = await Promise.all(
        activeServers.map(name =>
          fetch(
            `https://raw.githubusercontent.com/Levak/warfacebot/master/cfg/server/${name}.cfg`
          ).then(data => data.text())
        )
      );

      const data = activeServers.map((server, i) => [server, res[i]]);

      const isSuccess = await sh.updateGameData(data);

      if (isSuccess) {
        setToastData({ text: 'Game data updated', severity: 'success' });
        setIsToast(true);
      } else {
        setToastData({
          text: 'Check the paths are correct',
          severity: 'error'
        });
        setIsToast(true);
      }
    }
  };

  return (
    <>
      <ServersBox />
      <div className={s.box}>
        <div className={s.btnBox}>
          <button className={s.btn} onClick={updateData}>
            Check update
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({
  settings: { servers },
}) => ({
  servers,
});

const mapDispatchToProps = {
  setIsToast,
  setToastData
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoUpdate);
