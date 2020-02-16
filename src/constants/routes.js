// Localhost just doesn't work
// Put in your local IP to run locally.
const LOCAL = '';
const PROD = 'http://ec2-54-167-255-136.compute-1.amazonaws.com';

export const HOSTNAME = PROD + '/api';

export const SEARCH = '/search';
export const SEARCHTERMS = 'searchTerms';

// User Routes
export const PROFILE = '/profile';
export const USER = '/user';
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const REGISTER = '/register';

// Recipe Routes
export const RECIPE = '/recipe';

// Stock Routes
export const STOCK = '/stock';
export const STOCK_ITEM = '/stock_item';

// Food Routes
export const FOOD = '/food';
