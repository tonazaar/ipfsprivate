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
This document explains IPFS javascript client way of access

For HTTP method of access refer 
- [node gateway access](privategateway.md)
- [global gateway access](../publicaccess/publicaccess.md)

##### Javascript client based access

By embedding IPFS javascript client in browser, node.js application, IPFS data can be interacted remotely.

The details about using is in the link

- https://github.com/ipfs/js-ipfs-http-client

It can be used in
- browser
- node.js application
- react

The sample for trying is provided in [sample](../clienttest)

A)  Using in node.js application

```
const ipfsClient = require('ipfs-http-client');
  
const ipfs = ipfsClient('/ip4/157.245.63.46/tcp/5002')

var result = await ipfs.cat('QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7') ;

```

B)  Using in react application

```
import ipfsClient from 'ipfs-http-client';

const ipfs = ipfsClient('/ip4/157.245.63.46/tcp/5002')

var result = await ipfs.cat('QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7') ;

```


###### Error while using API 

Using provided sample

```
$ node testcommand.js 
err=FetchError: request to http://157.245.63.46:5001/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 157.245.63.46:5001


```

Solution for the error

1) Run below commands

```
ipfs config Addresses.API /ip4/0.0.0.0/tcp/5002
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
```

2) restart daemon (needed)

3) Now it works

```
node testcommand.js 
repo1=[{"path":"tmp/myfile.txt","hash":"QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW","size":11},{"path":"tmp","hash":"QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg","size":67}]

```
