# Overview

## Non functional tests list:
  - [x] Avrage load test
  - [x] Stress test
  - [x] Spike test
  - [x] Breake point test
  - [x] Soak test
  - [x] Smoke test

# Quick start
### instll k6:
**Debian/Ubuntu:**
```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

**Fedora/CentOS:**
```bash
sudo dnf install https://dl.k6.io/rpm/repo.rpm
sudo dnf install k6
```
### run the compose file:
```bash
sudo docker compose up -d
```
### run test:
```bash
k6 run --out influxdb=http://localhost:8086/k6 <your_test>
```
replace **<your_test>** with one of the fallowing items:
  - LoadTest.js
  - SoakTest.js
  - SpikeTest.js
  - StressTest.js
  - SmokeTest.js


![Types of tests](../images/chart-load-test-types-overview.png)

### Smoke Test
Before running any other tests, we run a smoke test to make sure the service and all endpoints we wrote tests for are up.

### Avrage load test
Now our goal is to measure performance and stability under typical and expected traffic conditions

We gradually increase the load to normal, hold it steady, then reduce it.

### Stress test
Now we want to see how much load our system or service can handle beyond its normal limits.

So we gradually increase the load until the response time or errors reach the desired increase, then we reduce the load to also check the recovery behavior of the service.

### Spike test
Now we want to examine the reaction and behavior of the system and service to sudden and severe load increases to become familiar with its behavior during times of urgent sales and campaigns.

### Soak test
Now we want to examine the behavior of the system and service in the long term and investigate the problems that may occur in the long term such as memory leaks, connection resource exhaustion, etc.

### Breake point test
Now we want to find the exact breaking point and we increase the load to find the exact breaking point.
