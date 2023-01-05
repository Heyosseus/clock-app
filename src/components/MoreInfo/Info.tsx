import React, { useEffect, useState } from 'react';
import info from '../MoreInfo/Info.module.css';

export default function Info() {
  const [timezone, setTimezone] = useState<string>('');
  const [year, setYear] = useState<number>();
  const [day, setDay] = useState<number>();
  const [week, setWeek] = useState<number>();

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Tbilisi')
      .then((res) => res.json())
      .then((res) => {
        setTimezone(res.timezone);
        setYear(res.day_of_year);
        setDay(res.day_of_week);
        setWeek(res.week_number);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={info.container}>
      <div className={info.timezone}>
        <h4>current timezone</h4>
        <h5>{timezone}</h5>
      </div>
      <div className={info.year}>
        <h4>day of the year</h4>
        <h5>{year}</h5>
      </div>
      <div className={info.week}>
        <h4>day of the week</h4>
        <h5>{day}</h5>
      </div>
      <div className={info.weekNumber}>
        <h4>week number</h4>
        <h5>{week}</h5>
      </div>
    </div>
  );
}
