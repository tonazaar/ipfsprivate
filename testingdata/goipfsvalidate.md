##### Validate of go-ipfs is working for private network

A) Create 3 repos
- repo (one, two) has swarm.key
- repo (three has no swarm.key


Start repo three
```
IPFS_PATH=/home/rameshbn/repos/three

$ ipfs daemon 
Initializing daemon...
go-ipfs version: 0.4.21-8ca278f45
Repo version: 7
System version: amd64/linux
Golang version: go1.12.6
Swarm listening on /ip4/10.15.0.10/tcp/8002
Swarm listening on /ip4/10.8.0.1/tcp/8002
Swarm listening on /ip4/127.0.0.1/tcp/8002
Swarm listening on /ip4/127.0.0.1/tcp/8003/ws
Swarm listening on /ip4/157.245.63.46/tcp/8002
Swarm listening on /ip4/172.17.0.1/tcp/8002
Swarm listening on /p2p-circuit
Swarm announcing /ip4/10.15.0.10/tcp/8002
Swarm announcing /ip4/10.8.0.1/tcp/8002
Swarm announcing /ip4/127.0.0.1/tcp/8002
Swarm announcing /ip4/127.0.0.1/tcp/8003/ws
Swarm announcing /ip4/157.245.63.46/tcp/8002
Swarm announcing /ip4/172.17.0.1/tcp/8002
API server listening on /ip4/127.0.0.1/tcp/9002
WebUI: http://127.0.0.1:9002/webui
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/9095
Daemon is ready

```


Start repo one
```
$ export IPFS_PATH=/home/rameshbn/repos/one
$ ipfs daemon &
$ Initializing daemon...
go-ipfs version: 0.4.21-8ca278f45
Repo version: 7
System version: amd64/linux
Golang version: go1.12.6
Swarm is limited to private network of peers with the swarm key
Swarm key fingerprint: 24c971c0df9eadc036ae5ae6d4c0aa3f
Swarm listening on /ip4/10.15.0.10/tcp/4002
Swarm listening on /ip4/10.8.0.1/tcp/4002
Swarm listening on /ip4/127.0.0.1/tcp/4002
Swarm listening on /ip4/127.0.0.1/tcp/4003/ws
Swarm listening on /ip4/157.245.63.46/tcp/4002
Swarm listening on /ip4/172.17.0.1/tcp/4002
Swarm listening on /p2p-circuit
Swarm announcing /ip4/10.15.0.10/tcp/4002
Swarm announcing /ip4/10.8.0.1/tcp/4002
Swarm announcing /ip4/127.0.0.1/tcp/4002
Swarm announcing /ip4/127.0.0.1/tcp/4003/ws
Swarm announcing /ip4/157.245.63.46/tcp/4002
Swarm announcing /ip4/172.17.0.1/tcp/4002
API server listening on /ip4/127.0.0.1/tcp/5002
WebUI: http://127.0.0.1:5002/webui
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/9090
Daemon is ready

```

Start repo two
```
$ export IPFS_PATH=/home/rameshbn/repos/two
$ ipfs daemon &
$ Initializing daemon...
go-ipfs version: 0.4.21-8ca278f45
Repo version: 7
System version: amd64/linux
Golang version: go1.12.6
Swarm is limited to private network of peers with the swarm key
Swarm key fingerprint: 24c971c0df9eadc036ae5ae6d4c0aa3f
Swarm listening on /ip4/10.15.0.10/tcp/7002
Swarm listening on /ip4/10.8.0.1/tcp/7002
Swarm listening on /ip4/127.0.0.1/tcp/7002
Swarm listening on /ip4/127.0.0.1/tcp/7003/ws
Swarm listening on /ip4/157.245.63.46/tcp/7002
Swarm listening on /ip4/172.17.0.1/tcp/7002
Swarm listening on /p2p-circuit
Swarm announcing /ip4/10.15.0.10/tcp/7002
Swarm announcing /ip4/10.8.0.1/tcp/7002
Swarm announcing /ip4/127.0.0.1/tcp/7002
Swarm announcing /ip4/127.0.0.1/tcp/7003/ws
Swarm announcing /ip4/157.245.63.46/tcp/7002
Swarm announcing /ip4/172.17.0.1/tcp/7002
API server listening on /ip4/127.0.0.1/tcp/6002
WebUI: http://127.0.0.1:6002/webui
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/9091
Daemon is ready


```

###### Get the listeners of each repo


Repo one
```
export IPFS_PATH=/home/rameshbn/repos/one
$ ipfs id
{
	"ID": "QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC1mKg/VSr+mgnmXzDWA8OlAqHTOjq9to0JZzRAjCrDOGlSbtwgZv3NvXzaeFozOwMOCAv65VF+cv0CUU79/+kz/SSdKZcnUUPMi7Ubl+5pfCiZ9pdu1Z6MrtW+GiSz6zta0nJ6YTyY3MVdiLdWjItBIXDgib0HYtA5+dykgMx490Cdk9jb2FHqKwLCRRb+PEF3fYD8ov394u1YqmXAwpAK7h1tK0TaHtvgAouiUYRM88Ec8gsN8NLUONpzIlH90IMtD3IqRTuwEhKrIUk2PUg3uQqd4ElhJwmfY+LY6yKv34St71LYrpMejathJWkyxy80FpkHnfimEPlJS7sgvlFHAgMBAAE=",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/4003/ws/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS",
		"/ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS",
		"/ip4/157.245.63.46/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS",
		"/ip4/10.15.0.10/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS",
		"/ip4/10.8.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS",
		"/ip4/172.17.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS"
	],
	"AgentVersion": "go-ipfs/0.4.21/8ca278f45",
	"ProtocolVersion": "ipfs/0.1.0"
}

```




Repo two
```
export IPFS_PATH=/home/rameshbn/repos/two
$ ipfs id
{
	"ID": "QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCRuen1ckV538GkrbtoT8FK0S2AGgcvleIIQZQ6sGPkaCKsoG9suQ+mty/4gmlb6W1FpqpkJpqAP6SJtTTbeOprDUrpSOfwUiifscg0tpro5FEc0LzFO5wPh+AgbJx4UlRFqg3fBOoysTEgkPVYxFBz0GoRfHV2EOrbmOBF3k+mYk/pX1F+Y+txejpAl0l78mXCS8nMRLdqdZlRt6/QbTfN8QA6qgL0GVTkHFrGW5ZXqXJh/Lg15yqamENLkmTI5LPIzvn+tkJp1q6tdcpvR9k6Pv5utMqrjDWKUgdfZwRyKZsQ3exiKS9z/cSqJCPmzwxYvuM5izIjjC9B2PhgZtVvAgMBAAE=",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU",
		"/ip4/157.245.63.46/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU",
		"/ip4/10.15.0.10/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU",
		"/ip4/10.8.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU",
		"/ip4/172.17.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU",
		"/ip4/127.0.0.1/tcp/7003/ws/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU"
	],
	"AgentVersion": "go-ipfs/0.4.21/8ca278f45",
	"ProtocolVersion": "ipfs/0.1.0"
}


```

Repo three
```
export IPFS_PATH=/home/rameshbn/repos/three
$ ipfs id
{
	"ID": "QmXT5nFWBbUTDMB1LmLwp85DUoxXL3MkdiCnXBScP1nZAM",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCfXgtVTJyBszGA46mN2otVyn4iOHeKO5IXsGPD1G7u6WduVAU3UYXN6IDgjWgl9MyVBtV3wAXIKK47bn/OnePZGrzVZ6RWtnWgBF7JST0BYgDQeeVL8MtKx3KyNBJdLILjK/cQmf94Lfw32aWemvF7WM/ZSQdbe601AXPl7/0A2w6TKozi7dSJIjBMo2ZNxeimoSwiigEUvg6zXJA8gREhQvoFIq3qshh+VXAe9w8R6P1G7alnHRfeDkdxGtwrBxlLPZfGDTuv5obVuBLcTrgCanewc1Qy4EJqiMDcF5FLjxVxAWzmcH2Sle5G06pf/8NTS0D7Qf0UhHAXCIJ2p0JrAgMBAAE=",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/8002/ipfs/QmXT5nFWBbUTDMB1LmLwp85DUoxXL3MkdiCnXBScP1nZAM",
		"/ip4/157.245.63.46/tcp/8002/ipfs/QmXT5nFWBbUTDMB1LmLwp85DUoxXL3MkdiCnXBScP1nZAM",
		"/ip4/10.15.0.10/tcp/8002/ipfs/QmXT5nFWBbUTDMB1LmLwp85DUoxXL3MkdiCnXBScP1nZAM",
		"/ip4/10.8.0.1/tcp/8002/ipfs/QmXT5nFWBbUTDMB1LmLwp85DUoxXL3MkdiCnXBScP1nZAM",
		"/ip4/172.17.0.1/tcp/8002/ipfs/QmXT5nFWBbUTDMB1LmLwp85DUoxXL3MkdiCnXBScP1nZAM",
		"/ip4/127.0.0.1/tcp/8003/ws/ipfs/QmXT5nFWBbUTDMB1LmLwp85DUoxXL3MkdiCnXBScP1nZAM"
	],
	"AgentVersion": "go-ipfs/0.4.21/8ca278f45",
	"ProtocolVersion": "ipfs/0.1.0"
}

```

Check if all nodes are running


```
ps
  PID TTY          TIME CMD
 9306 pts/0    00:00:00 bash
10052 pts/0    00:00:01 ipfs
10095 pts/0    00:00:00 ipfs
10127 pts/0    00:00:00 ipfs

```

##### Testing if swarm.key is working

Pickup listener from repo two /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU

Try to connect from repo three 
- Expected to fail (three has no swarm.key)
 
```
IPFS_PATH=/home/rameshbn/repos/three


 ipfs swarm connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU

```
---> does not connect


Try to connect from repo two 
- Expected to fail (same node)
 

```

$ export IPFS_PATH=/home/rameshbn/repos/two
$ ipfs swarm connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
Error: connect QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU failure: dial to self attempted

```

Try to connect from repo one
- Expected to pass 

```
$ export IPFS_PATH=/home/rameshbn/repos/one
$ ipfs swarm connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
connect QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU success

```

Also listener of one to two

- Not sure if it is needed. It works without this also

```
export IPFS_PATH=/home/rameshbn/repos/two
$ ipfs swarm connect /ip4/127.0.0.1/tcp/4002/ipfs/QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS
connect QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS success

```


##### Summary

- go-ipfs is good for ipfs private network
