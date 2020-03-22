##### Setup to access IPFS files in public gateway

Create repository for testing
```
export IPFS_PATH=/home/rameshbn/repos/globfour
$ ipfs init
initializing IPFS node at /home/rameshbn/repos/globfour
generating 2048-bit RSA keypair...done
peer identity: QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS
to get started, enter:

	ipfs cat /ipfs/QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv/readme


```

Start ipfs daemon

```
ipfs daemon &
[1] 25533
$ Initializing daemon...
go-ipfs version: 0.4.21-8ca278f45
Repo version: 7
System version: amd64/linux
Golang version: go1.12.6
Swarm listening on /ip4/10.15.0.10/tcp/4001
Swarm listening on /ip4/10.8.0.1/tcp/4001
Swarm listening on /ip4/127.0.0.1/tcp/4001
Swarm listening on /ip4/157.245.63.46/tcp/4001
Swarm listening on /ip4/172.17.0.1/tcp/4001
Swarm listening on /ip6/::1/tcp/4001
Swarm listening on /p2p-circuit
Swarm announcing /ip4/10.15.0.10/tcp/4001
Swarm announcing /ip4/10.8.0.1/tcp/4001
Swarm announcing /ip4/127.0.0.1/tcp/4001
Swarm announcing /ip4/157.245.63.46/tcp/4001
Swarm announcing /ip4/172.17.0.1/tcp/4001
Swarm announcing /ip6/::1/tcp/4001
API server listening on /ip4/127.0.0.1/tcp/5001
WebUI: http://127.0.0.1:5001/webui
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready


```
Check listeners

```
ipfs id

{
	"ID": "QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIL4hI684AcjKDymGJ66E7pk1XrDIEiesHb/t4yXkGeoAxfEXjw+JAoh5W45PV2yJpZ78lm9ir2tmFGq4xnmQWpvJ5alzOIupE5g3lUAKe3SlU6BG4aaAo1uvvVk3rA1vIOqwGmCAKfYP3IBTK9Eo03Y+rAU2up6/eYEN7tiizE0EwLn1nk1Hh3IpuLiHgLV9Coo+ZM/BRM7ZasiIaelUSbRPWqscD5q6G7e0lp4kQ5/kxky6D6nCKAmCYJp0a2tUwoTCp5Q4v2VNjPxCkRfvftx+CVIPrOAp0yWba9aQteNFaTdOsdL2+fzwgzQAiazURdp5b5ummUZFQAnJhXmnJAgMBAAE=",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/4001/ipfs/QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS",
		"/ip4/157.245.63.46/tcp/4001/ipfs/QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS",
		"/ip4/10.15.0.10/tcp/4001/ipfs/QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS",
		"/ip4/10.8.0.1/tcp/4001/ipfs/QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS",
		"/ip4/172.17.0.1/tcp/4001/ipfs/QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS",
		"/ip6/::1/tcp/4001/ipfs/QmQD1upePoPkWoYdDtsZZR4n9jTYk2V1Ly84xdXGWP6cvS"
	],
	"AgentVersion": "go-ipfs/0.4.21/8ca278f45",
	"ProtocolVersion": "ipfs/0.1.0"
}

```
Check peers

```
 ipfs swarm peers
/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
/ip4/104.193.50.208/tcp/4001/ipfs/QmZZYYjL7iPZ4Up1p7FTkfBaPGpFonDt86wFauDRu8UVMa
/ip4/106.52.162.144/tcp/4001/ipfs/QmPWE5D35QCRQ6yeJnNJo7b9NyxmUbNbLiD9vBfZVSaZyL
/ip4/106.54.9.33/tcp/4001/ipfs/QmXfUWEKBUETfGEPGBcJQbk8RAEnLR6UcZKB9RJoNbCAR5
/ip4/111.229.245.186/tcp/4001/ipfs/QmWg2wUgfae4GJuYXhcXZPwxBfnZQXoyG8WzTCXuZJ3b3D
/ip4/111.229.48.203/tcp/4001/ipfs/QmRgttuNpmpq7rjwpyfNzgxpVcqupeMUFQnCiczNUS1Ty9
/ip4/93.187.218.217/tcp/4001/ipfs/QmVNb9aEcdFgxGBLCzs9oJziSxbodt6sZMRcoXYHkyzfQx
/ip4/99.254.66.98/tcp/12878/ipfs/QmYJUt6HSZsZ5JiFEp9kuJ77HbhC3uwLDJcJUEgCitjejS
```

Create file and upload the file

```
$ ipfs add glob1.txt
added QmUPEpTcJwY54MsMfhcNvEUURP6Z9pytWKFCMKdZ8XA5G9 glob1.txt
 14 B / 14 B [=================================

```

Access in public gateway
```
curl https://ipfs.io/ipfs/QmUPEpTcJwY54MsMfhcNvEUURP6Z9pytWKFCMKdZ8XA5G9
global 1 file

```


##### Not able to find file in public gateway

Check the following reasons

A) Using as public network

Check if public peers are connected

```
ipfs swarm peers
/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
/ip4/104.193.50.208/tcp/4001/ipfs/QmZZYYjL7iPZ4Up1p7FTkfBaPGpFonDt86wFauDRu8UVMa

```
If peers are not connected fixit by adding bootstrap entries in config file.

B) Using as private network

- If you are using as private network (using swarm.key)
- It won't connect.

