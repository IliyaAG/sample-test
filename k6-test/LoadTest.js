import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { BASE_URL, urls } from './variables.js'; 

let responseTime = new Trend('response_time');

export let options = {
  stages: [
    { duration: '2m', target: 50 },
    { duration: '5m', target: 50 },
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  let endpoint = urls[Math.floor(Math.random() * urls.length)];
  let res = http.get(`${BASE_URL}${endpoint}`, { tags: { endpoint } });

  responseTime.add(res.timings.duration);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body is not empty': (r) => r.body && r.body.length > 0,
  });

  sleep(Math.random() * 2 + 1);
}
