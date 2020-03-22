
Remote access to private network from browser
Why api, why gateway


https://github.com/ipfs/go-ipfs/blob/master/docs/gateway.md


curl https://ipfs.io/api/v0/block/get/bafkreifjjcie6lypi6ny7amxnfftagclbuxndqonfipmb64f2km2devei4



 var publicurl = 'https://ipfs.io/ipfs/'+file.cid.toString()
        var privateurl = localgateway + '/ipfs/'+file.cid.toString()


For one repo

 "API": "/ip4/157.245.63.46/tcp/5001",
    "Gateway": "/ip4/157.245.63.46/tcp/9090",


   publicgateway: 'https://ipfs.io',
      localgateway: 'http://157.245.63.46:9090',

curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
curl  http://localhost:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7




 curl  http://localhost:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test


curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
curl: (7) Failed to connect to 157.245.63.46 port 9090: Connection refused

basics.txt:ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/9090
basics.txt:ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'

restart daemon (needed)

curl  http://157.245.63.46:9090/ipfs/QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test





rameshbn@openvpn-srv:~/ipfsstuffs/ipfsprivate/clienttest$ node testcommand.js 
err=FetchError: request to http://157.245.63.46:5001/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 157.245.63.46:5001



"API": "/ip4/127.0.0.1/tcp/5002",
basics.txt:ipfs config Addresses.API /ip4/0.0.0.0/tcp/5002



restart then it works

node testcommand.js 
repo1=[{"path":"tmp/myfile.txt","hash":"QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW","size":11},{"path":"tmp","hash":"QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg","size":67}]

