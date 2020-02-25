const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
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

export const properDateHelper = (
  dateObj: Date,
  showWeekday: boolean = true,
  showYear: boolean = true,
): string => {
  const weekday = weekdays[dateObj.getDay()];
  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${showWeekday ? weekday + ' ' : ''}${month} ${date} ${
    showYear ? ', ' + year : ''
  }`;
};

export const dateDifferenceHelper = (date1: Date, date2: Date) =>
  Math.floor((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));
