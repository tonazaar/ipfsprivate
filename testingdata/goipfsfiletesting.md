###### Testing data transfer between repos connected in private network

Prereq

- This uses setup of [three repos](goipfsvalidate.md)


A) Create ipfs data in repo one

```
IPFS_PATH=/home/rameshbn/repos/one
ipfs add x1.txt
added QmbemXqWynkEF8yfkRoe52KXH6q7V15PCg8BAps7xeEpw6 x1.txt
 8 B / 8 B [==========================================================================================================================] 100.00%rameshbn@openvpn-srv:~/repos$ env |grep IPFS

$ ipfs cat QmbemXqWynkEF8yfkRoe52KXH6q7V15PCg8BAps7xeEpw6
x1 here

```


B) Verify if repo two got data 

```
export IPFS_PATH=/home/rameshbn/repos/two
rameshbn@openvpn-srv:~/repos$ ipfs cat QmbemXqWynkEF8yfkRoe52KXH6q7V15PCg8BAps7xeEpw6
x1 here

```


C) Preparing for disconnecting

```
IPFS_PATH=/home/rameshbn/repos/two
$ ipfs swarm peers
/ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS

$ ipfs swarm disconnect /ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS

```

Could not test after disconnection, as it keeps connecting


##### Summary

- Data created in repo one is available in repo two


