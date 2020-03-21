 env |grep IPFS
IPFS_PATH=/home/alarm/ipfsrepos/remoteone


copy swarm.key

ipfs daemon &
[1] 553
[alarm@alarmpi ipfsrepos]$ Initializing daemon...
go-ipfs version: 0.4.23-6ce9a355f
Repo version: 7
System version: arm/linux
Golang version: go1.13.7
Swarm is limited to private network of peers with the swarm key
Swarm key fingerprint: 24c971c0df9eadc036ae5ae6d4c0aa3f
Swarm listening on /ip4/10.42.0.65/tcp/4001
Swarm listening on /ip4/10.42.0.67/tcp/4001
Swarm listening on /ip4/10.42.0.85/tcp/4001
Swarm listening on /ip4/127.0.0.1/tcp/4001
Swarm listening on /ip4/192.168.1.1/tcp/4001
Swarm listening on /ip4/192.168.1.100/tcp/4001
Swarm listening on /ip6/::1/tcp/4001
Swarm listening on /p2p-circuit
Swarm announcing /ip4/10.42.0.65/tcp/4001
Swarm announcing /ip4/10.42.0.67/tcp/4001
Swarm announcing /ip4/10.42.0.85/tcp/4001
Swarm announcing /ip4/127.0.0.1/tcp/4001
Swarm announcing /ip4/192.168.1.1/tcp/4001
Swarm announcing /ip4/192.168.1.100/tcp/4001
Swarm announcing /ip6/::1/tcp/4001
API server listening on /ip4/127.0.0.1/tcp/5001
WebUI: http://127.0.0.1:5001/webui
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready





ipfs id
{
	"ID": "QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDjIHwZQGiVbTQsNgIv0r2pJ8GbzZizCeIG/zqYM1qAwTYcbfWU2La5IhDHmrkgF6yh7grNXtk+a8qypTNHwzuz/3Rjzc+Zn9TDNuOYapX8GuE2Fj+1ayVKFg4iGfCupPvGcZaFuS6tchDVaGPw0DuyTUrum7NlZOX4k8gaKMyfYImqDJ0VC6/WRpMSju3YStfhjHN1+r/KbR++8OiWUGkLzsUA69Ckcqd4LAIz3yGTC0wKIj5ITY2hzr/an2G1r7aHjL6qiqsHTzWGFMdd5SIFfmWl69kB3+E56H+DUmbgypW25o2o+aQnm3y6zSSOjUU50ASFCv+8D0wSal3xUgdvAgMBAAE=",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb",
		"/ip4/10.42.0.67/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb",
		"/ip4/10.42.0.65/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb",
		"/ip4/10.42.0.85/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb",
		"/ip4/192.168.1.100/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb",
		"/ip4/192.168.1.1/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb",
		"/ip6/::1/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb"
	],
	"AgentVersion": "go-ipfs/0.4.23/6ce9a355f",
	"ProtocolVersion": "ipfs/0.1.0"



ipfs swarm connect /ip4/157.245.63.46/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS
Error: connect QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS failure: failed to dial : all dials failed
  * [/ip4/157.245.63.46/tcp/4002] dial tcp4 0.0.0.0:4001->157.245.63.46:4002: i/o timeout
[alarm@alarmpi ipfsrepos]$ ps  



/ip4/157.245.63.46/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS^C
rameshbn@openvpn-srv:~/repos$ ufw allow 4002
ERROR: You need to be root to run this script
rameshbn@openvpn-srv:~/repos$ sudo ufw allow 4002
Rule added
Rule added (v6)




 ipfsrepos]$ ipfs swarm connect /ip4/157.245.63.46/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS
connect QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS success





 export IPFS_PATH=`pwd`/one
rameshbn@openvpn-srv:~/repos$ vi rem1.txt
rameshbn@openvpn-srv:~/repos$ ipfs add rem1.txt
added QmT3NxKyWMwj6Y9xcYZc99xBTKCoicL84J3FRRrBXD2ZTQ rem1.txt
 24 B / 24 B [===============================================================================================



[alarm@alarmpi ipfsrepos]$ ipfs cat QmT3NxKyWMwj6Y9xcYZc99xBTKCoicL84J3FRRrBXD2ZTQ
this is for remote test



below is inout test (not expected to work). But working



rameshbn@openvpn-srv:~/repos$  ipfs cat QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test
rameshbn@openvpn-srv:~/repos$ ipfs peers
Error: Unknown Command "peers"

rameshbn@openvpn-srv:~/repos$ ipfs swarm peers
/ip4/157.245.63.46/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
/ip4/49.37.194.207/tcp/4001/ipfs/QmUk11oukR2Fp8TSX1RLQZAivyo96JvydSiKfrkJdJoEQb
rameshbn@openvpn-srv:~/repos$ ping 49.37.194.207
PING 49.37.194.207 (49.37.194.207) 56(84) bytes of data.
^C
--- 49.37.194.207 ping statistics ---
6 packets transmitted, 0 received, 100% packet loss, time 5100ms

rameshbn@openvpn-srv:~/repos$ env |grep IPFS
IPFS_PATH=/home/rameshbn/repos/one
rameshbn@openvpn-srv:~/repos$ export IPFS_PATH=/home/rameshbn/repos/two
rameshbn@openvpn-srv:~/repos$  ipfs cat QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test




 vi inout.txt
[alarm@alarmpi ipfsrepos]$ ipfs add inout.txt 
added QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7 inout.txt
 19 B / 19 B [========================================================================================================================] 100.00%[alarm@alarmpi ipfsrepos]$ ipfs cat QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test



disconnect and test

 ipfs add inout2.txt
added QmWx4cfTy4phy4HqZJB6j6YSDi7M27oYeVMYGGmPm9QXj6 inout2.txt
 21 B / 21 B [========================================================================================================================] 100.00%[alarm@alarmpi ipfsrepos]$ ipfs cat QmWx4cfTy4phy4HqZJB6j6YSDi7M27oYeVMYGGmPm9QXj6
this is second inout
[alarm@alarmpi ipfsrepos]$ ipfs swarm peers





env |grep IPFS
IPFS_PATH=/home/rameshbn/repos/one
rameshbn@openvpn-srv:~/repos$ export IPFS_PATH=/home/rameshbn/repos/two
rameshbn@openvpn-srv:~/repos$  ipfs cat QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7
this is inout test
rameshbn@openvpn-srv:~/repos$ vi remo*
rameshbn@openvpn-srv:~/repos$ ipfs cat QmWx4cfTy4phy4HqZJB6j6YSDi7M27oYeVMYGGmPm9QXj6
^C
Error: Post http://127.0.0.1:6002/api/v0/cat?arg=QmWx4cfTy4phy4HqZJB6j6YSDi7M27oYeVMYGGmPm9QXj6&encoding=json&stream-channels=true: context canceled
rameshbn@openvpn-srv:~/repos$ export IPFS_PATH=/home/rameshbn/repos/one
rameshbn@openvpn-srv:~/repos$ ipfs cat QmWx4cfTy4phy4HqZJB6j6YSDi7M27oYeVMYGGmPm9QXj6
^C
Error: Post http://127.0.0.1:5002/api/v0/cat?arg=QmWx4cfTy4phy4HqZJB6j6YSDi7M27oYeVMYGGmPm9QXj6&encoding=json&stream-channels=true: context canceled
rameshbn@openvpn-srv:~/repos$ ipfs swarm peers
/ip4/157.245.63.46/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU

