
##### Installing go-ipfs 

/home/rameshbn/repos
Install go-ipfs on ubuntu

```
$ sudo snap install ipfs
ipfs v0.4.21 from Leo Arias (elopio) installed

```

Validating if go-ipfs suitable for IPFS private network

- [Steps for validating](goipfsvalidate.md)




ipfs add x1.txt
added QmbemXqWynkEF8yfkRoe52KXH6q7V15PCg8BAps7xeEpw6 x1.txt
 8 B / 8 B [==========================================================================================================================] 100.00%rameshbn@openvpn-srv:~/repos$ env |grep IPFS
IPFS_PATH=/home/rameshbn/repos/one
rameshbn@openvpn-srv:~/repos$ ipfs cat QmbemXqWynkEF8yfkRoe52KXH6q7V15PCg8BAps7xeEpw6
x1 here



 export IPFS_PATH=/home/rameshbn/repos/two
rameshbn@openvpn-srv:~/repos$ ipfs cat QmbemXqWynkEF8yfkRoe52KXH6q7V15PCg8BAps7xeEpw6
x1 here



preparing for disconnecting

env |grep IPFS
IPFS_PATH=/home/rameshbn/repos/two
rameshbn@openvpn-srv:~/repos$ ipfs swarm peers
/ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS
rameshbn@openvpn-srv:~/repos$ ipfs swarm connect /ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS





 ipfs swarm disconnect /ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGSvi
Error: invalid peer address: failed to parse multiaddr "/ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGSvi": invalid value "QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGSvi" for protocol ipfs: failed to parse p2p addr: QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGSvi multihash length inconsistent: &{6510  77 [115 108 246 135 198 220 176 159 234 122 56 58 62 184 21 60 82 222 241 229 220 224 47 207 17 3 197 72 2 202 194 183]}
Use 'ipfs swarm disconnect --help' for information about this command


one

ipfs swarm peers
/ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU



 ipfs swarm peers
/ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
rameshbn@openvpn-srv:~/repos$ ipfs dht findpeer /ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGSvi^C
rameshbn@openvpn-srv:~/repos$ vi gost*
rameshbn@openvpn-srv:~/repos$ ipfs swarm disconnect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
disconnect QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU success
rameshbn@openvpn-srv:~/repos$ env |grep IP
IPFS_PATH=/home/rameshbn/repos/one





 export IPFS_PATH=/home/rameshbn/repos/two
rameshbn@openvpn-srv:~/repos$ ipfs swarm peers
/ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS
rameshbn@openvpn-srv:~/repos$ ipfs swarm disconnect /ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS
disconnect QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS success



Could not test after disconnection, as it keeps connecting

