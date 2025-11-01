import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL, urls } from './variables.js';

export let options = {
  vus: 1,
  iterations: 5,
};

export default function () {
  for (let endpoint of urls) {
    let res = http.get(`${BASE_URL}${endpoint}`);
    check(res, {
      'status is 200': (r) => r.status === 200,
    });
  }
}
