# Overview

## Non functional tests list:
  - [x] Avrage load test
  - [x] Stress test
  - [x] Spike test
  - [x] Breake point test
  - [x] Soak test

![Types of tests](../images/chart-load-test-types-overview.png)

### Avrage load test

### Stress test

### Spike test

### Breake point test

### Soak test

# Quick start

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
