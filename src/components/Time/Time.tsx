import React, { useEffect } from 'react';
import style from '../Time/Time.module.css';
import sun from '../../assets/desktop/icon-sun.svg';
import moon from '../../assets/desktop/icon-moon.svg';

type Props = {
  time: number;
  setTime: any;
};
const Time: React.FC<Props> = ({ time, setTime }) => {
  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Tbilisi')
      .then((res) => res.json())
      .then((res) => {
        const date = new Date(res.unixtime * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        setTime(`${hours}:${minutes}`);
      })
      .catch((err) => console.error(err));
  }, []);

  const presentTime = new Date().getHours();
  return (
    <div className={style.container}>
      {presentTime >= 5 && presentTime < 18 ? (
        <div className={style.content}>
          <img src={sun} alt="sun" className={style.sun} />
          <h3 className={style.text}>Good Morning</h3>
        </div>
      ) : (
        <div className={style.content}>
          <img src={moon} alt="moon" />
          <h3 className={style.text}>Good Evening</h3>
        </div>
      )}
      <div className={style.timeContent}>
        {time}
        <span>UTC</span>
      </div>
      <h3 className={style.location}>In Tbilisi, Georgia</h3>
    </div>
  );
};

export default Time;
