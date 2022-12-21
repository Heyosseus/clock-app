import React, { useEffect } from 'react';
import quotes from '../Quotes/Quotes.module.css';
import refresh from '../../assets/desktop/icon-refresh.svg';

type Props = {
  quote: string;
  setQuote: any;
  author: string;
  setAuthor: any;
};

const QuotesContainer: React.FC<Props> = ({
  quote,
  setQuote,
  author,
  setAuthor,
}) => {
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

  const refreshHandler = () => {
    fetch(
      'https://api.quotable.io/random?minLength=100&maxLength=140'
    )
      .then((res) => res.json())
      .then((res) => {
        setQuote(res.content);
        setAuthor(res.author);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={quotes.container}>
      <div className={quotes.content}>
        <div className={quotes.quote}>{quote}</div>
        <img
          src={refresh}
          alt="refresh icon"
          className={quotes.refresh}
          onClick={refreshHandler}
        />
      </div>
      <div className={quotes.author}>{author}</div>
    </div>
  );
};

export default QuotesContainer;
