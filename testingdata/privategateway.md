##### Accessing IPFS data 
The IPFS data can be accessed as a HTTP request or through a IPFS javascript client.

A) When accessing as HTTP request it can be done through
- node gateway
- global gateway


B) When accessing through IPFS javascript client, you can use
- https://github.com/ipfs/js-ipfs-http-client


C) The config file has API and Gateway access points

```
 "API": "/ip4/157.245.63.46/tcp/5001",
 "Gateway": "/ip4/157.245.63.46/tcp/9090",

```
This document explains HTTP way of access

For IPFS javascript method of access refer
- [IPFS javascript access](apiaccess.md)




##### Gateway based access

Details of gateway based access can be found in

- https://github.com/ipfs/go-ipfs/blob/master/docs/gateway.md


Public access

```
 var publicurl = 'https://ipfs.io/ipfs/'+file.cid.toString()

 curl  http://ipfs.io/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7

```

Node gateway access

```
 var localgateway= 'http://157.245.63.46:9090';
 var privateurl = localgateway + '/ipfs/'+file.cid.toString()

 curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7

```

##### Error accessing gateway

If the gateway is able to access locally but not connecting remotely

A) Working locally

```
curl  http://localhost:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
Hello world       

```

B) Error accessing remotely
```
curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
curl: (7) Failed to connect to 157.245.63.46 port 9090: Connection refused

```
###### Solution to the error

1) Run below commands

```
ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/9090
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
```

2) Restart ipfs daemon (needed)

3) Now it works

```
curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
Hello world       

```
