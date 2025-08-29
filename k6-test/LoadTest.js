import http from 'k6/http';
import { check, sleep } from 'k6';
import { urls } from './variables.js'

export default function () {
    for (let url of urls) {
        let res = http.get(url)
        check(res, {
            'status is 200': (r) => r.status === 200,
        });
        sleep(1);
    }
}
