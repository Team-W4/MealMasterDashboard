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

export const properDateHelper = (dateString: Date, showWeekday: boolean = true, showYear: boolean = true): string => {
  const weekday = weekdays[dateString.getDay()];
  const date = dateString.getDate();
  const month = months[dateString.getMonth()];
  const year = dateString.getFullYear();

  return (showWeekday ? weekday + ' ' : '') + month + ' ' + date + (showYear ? ', ' + year : '');
}

export const dateDifferenceHelper = (date1: Date, date2: Date) => (
  Math.floor((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24))
);
