const titleHelper = (title: string): string => {
  const splitStr = title.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
};

export default titleHelper;
