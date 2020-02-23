export const expiryLabelHelper = (expiryTime: number, suffixed: boolean = true): string => {
  const days = Math.abs(expiryTime);
  const plural = Math.abs(expiryTime) > 1 ? 'days' : 'day';
  const suffix = expiryTime < 0 ? 'ago' : (suffixed ? 'left' : '');

  return expiryTime === 0 ? 'Today' : `${days} ${plural} ${suffix}`;
};

export const stockItemLabelHelper = (expiryTime: number): string => {
  let timeString = '';
  if (expiryTime === 0) {
    timeString = 'today';
  } else if (expiryTime === 1) {
    timeString = 'tomorrow';
  } else if (expiryTime === -1) {
    timeString = 'yesterday'
  } else {
    timeString = `${expiryTime < 0 ? '' : 'in '}${expiryLabelHelper(expiryTime, false)}`;
  }

  return `Expire${expiryTime < 0 ? 'd' : 's'} ${timeString}`;
};
