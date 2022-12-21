import { useState, useEffect } from 'react';
import style from './App.module.css';
import QuotesContainer from './components/Quotes/Quotes';
import Time from './components/Time/Time';
import Button from './components/Button/Button';

function App() {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [time, setTime] = useState<any>();
  const [city, setCity] = useState<string>('');

  const presentTime = new Date().getHours();
  return presentTime <= 5 && presentTime > 18 ? (
    <div className={style.container}>
      <QuotesContainer
        quote={quote}
        setQuote={setQuote}
        author={author}
        setAuthor={setAuthor}
      />
      <Time time={time} setTime={setTime} />
      <Button />
    </div>
  ) : (
    <div className={style.containerDay}>
      <QuotesContainer
        quote={quote}
        setQuote={setQuote}
        author={author}
        setAuthor={setAuthor}
      />
      <Time time={time} setTime={setTime} />
      <Button />
    </div>
  );

}

export default App;
