import React from 'react';
import moment from 'moment-timezone';

const calculateTimeLeft = () => {
  // const difference = +new Date("2020-10-04") - +new Date();
  const difference = +moment('2021-03-19 08:00').tz('Asia/Jakarta') - +moment().tz('Asia/Jakarta')
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      mins: Math.floor((difference / 1000 / 60) % 60),
      sec: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
};

const getSec = () => {
  return calculateTimeLeft()['sec'];
}

const getHours = () => {
  return calculateTimeLeft()['hours'];
}

const getMins = () => {
  return calculateTimeLeft()['mins'];
}

const getDays = () => {
  return calculateTimeLeft()['days'];
}

export default function useCountdown(keyItem) {
  const [timeLeft, setTimeLeft] = React.useState(() => calculateTimeLeft(keyItem));
  
  React.useEffect(() => {
    // calculateTimeLeft();
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    //   switch (keyItem) {
    //     case 'days':
    //       setTimeLeft(getDays());
    //       break;
    //     case 'hours':
    //       setTimeLeft(getHours());
    //       break;
    //     case 'mins':
    //       setTimeLeft(getMins());
    //       break;
    //     case 'sec':
    //       setTimeLeft(getSec());
    //       break;
    //     default:
    //       break;
    //   }
    }, 1000);
  }, [timeLeft])

  return timeLeft[keyItem];
};