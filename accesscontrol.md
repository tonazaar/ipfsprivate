#### IPFS access control

A) IPFS nodes can be accessed using 
- https://github.com/ipfs/js-ipfs-http-client

B) The method of controlling access is by using config level control

```
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin  '["http://example.com"]'
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST", "GET"]'

```
C) The other is by having custom access

```

ipfsClient({
  host: 'localhost',
  port: 5001,
  protocol: 'http',
  headers: {
    authorization: 'Bearer ' + TOKEN
  }
})



```

D) If custom header is used, i am not sure how IPFS can use that

Some mention of using custom header 
- https://github.com/ipfs/go-ipfs/issues/1532 (has explanation)
- https://github.com/ipfs/js-ipfs-http-client/issues/724 (used when starting from node.js)


E) The other method i think can help is having a proxy to do jwt access before it reaches the IPFS node

The following may help for that


- https://www.nginx.com/blog/authentication-content-based-routing-jwts-nginx-plus/
- https://www.xoriant.com/blog/product-engineering/microservices-security-using-jwt-authentication-gateway.html
- https://www.express-gateway.io/docs/configuration/
- https://github.com/quay/jwtproxy
- https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-jwt-authentication/
- https://www.nginx.com/blog/authenticating-api-clients-jwt-nginx-plus/
- https://blog.stacktical.com/ipfs/gateway/dapp/2019/09/21/ipfs-server-google-cloud-platform.html (reference)
- https://medium.com/pinata/dedicated-ipfs-networks-c692d53f938d

