##### Accessing IPFS data

The IPFS data can be accessed as a HTTP request or a IPFS client.

When accessing as HTTP request it can be accessed
- from node gateway
- from global gateway



In the config file you will find data like below

```
 "API": "/ip4/157.245.63.46/tcp/5001",
 "Gateway": "/ip4/157.245.63.46/tcp/9090",

```


Gateway based access

Details can be found in

- https://github.com/ipfs/go-ipfs/blob/master/docs/gateway.md


Public access

 var publicgateway= 'https://ipfs.io';
 var publicurl = 'https://ipfs.io/ipfs/'+file.cid.toString()


```
curl  http://ipfs.io/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7

```

Node gateway access
 var localgateway= 'http://157.245.63.46:9090';
 var privateurl = localgateway + '/ipfs/'+file.cid.toString()

```

curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7

```

###### Error while accessing gateway


A) Working locally

```
 curl  http://localhost:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test

```

B) Error accessing remotely
```
curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
curl: (7) Failed to connect to 157.245.63.46 port 9090: Connection refused

```
Solution to error

1) Run below commands

ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/9090
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'

2) restart daemon (needed)

3) Now it works

```
curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test

```




