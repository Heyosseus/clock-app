import React, { useState } from 'react';
import btn from '../Button/Button.module.css';
import down from '../../assets/desktop/icon-arrow-down.svg';
import up from '../../assets/desktop/icon-arrow-up.svg';

function Button() {
  const [isShown, setIsShown] = useState(true);
  const showHandler = () => {
    setIsShown(!isShown);
  };
  return (
    <div className={btn.container}>
      {isShown ? (
        <div className={btn.button} onClick={showHandler}>
          <p>More</p>
          <div className={btn.circle}>
            <img src={down} alt="arrow down" className={btn.down} />
          </div>
        </div>
      ) : (
        <div className={btn.button} onClick={showHandler}>
          <p>Less</p>
          <div>
            <img src={up} alt="arrow up" className={btn.up} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Button;
