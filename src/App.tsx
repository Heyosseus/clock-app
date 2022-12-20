import { useState, useEffect } from 'react';
import style from './App.module.css';

function App() {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [time, setTime] = useState<any>();
  const [city, setCity] = useState<string>('')
  useEffect(() => {
    fetch(
      'https://api.quotable.io/random?minLength=100&maxLength=140'
    )
      .then((res) => res.json())
      .then((res) => {
        setQuote(res.content);
        setAuthor(res.author);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Asia/Tbilisi')
      .then((res) => res.json())
      .then((res) => {
        const date = new Date(res.unixtime * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        setTime(`${hours}:${minutes}`);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      'https://api.quotable.io/random?minLength=100&maxLength=140'
    )
      .then((res) => res.json())
      .then((res) => {
        setQuote(res.content);
        setAuthor(res.author);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.quote}>{quote}</div>
      <div className={style.author}>{author}</div>

      <div>
        <div className={style.time}>{time}</div>
      </div>
    </div>
  );
}

export default App;
