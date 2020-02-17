import { HOSTNAME } from '../constants/routes';

export const getHelper = route => {
  const url = HOSTNAME + route;
  return fetch(url, {
    credentials: 'include',
  })
    .then(res => res.json())
    .then(json => json.body)
    .catch(e => console.log(e));
};

export const postHelper = (route, body) => {
  const url = HOSTNAME + route;
  return fetch(url, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(json => json.body);
};

export const putHelper = (route, body) => {
  const url = HOSTNAME + route;
  return fetch(url, {
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(json => json.body);
};

export const deleteHelper = route => {
  const url = HOSTNAME + route;
  return fetch(url, {
    credentials: 'include',
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(json => json.body);
};
