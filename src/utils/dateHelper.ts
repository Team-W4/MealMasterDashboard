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
  showWeekday = true,
  showYear = true,
): string => {
  const weekday = weekdays[dateObj.getDay()];
  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${showWeekday ? `${weekday} ` : ''}${month} ${date} ${
    showYear ? `, ${year}` : ''
  }`;
};

export const dateDifferenceHelper = (date1: Date, date2: Date): number => (
  Math.floor((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24))
);

export const dateParser = (dateString: string): Date => {
  if (!dateString || dateString.length < 0) {
    return new Date();
  }

  return new Date(dateString.replace('+0000', 'Z'));
};
