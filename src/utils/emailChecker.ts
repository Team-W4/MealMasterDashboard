const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const emailChecker = (email: string): boolean => emailRegex.test(email);

export default emailChecker;
