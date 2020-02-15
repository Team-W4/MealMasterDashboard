import React from 'react';
import Subtitle from '../../components/Texts/Subtitle';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Satday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const Today = (): JSX.Element => {
  const today = new Date();
  console.log(today);
  const weekday = weekdays[today.getDay()];
  const date = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return <Subtitle>{weekday + ' ' + date + ' ' + month + ' ' + year}</Subtitle>;
};

export default Today;
