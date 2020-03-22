##### Setup to access IPFS files in public gateway

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
Check listeners
```
 ipfs swarm peers
/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
/ip4/104.193.50.208/tcp/4001/ipfs/QmZZYYjL7iPZ4Up1p7FTkfBaPGpFonDt86wFauDRu8UVMa
/ip4/106.52.162.144/tcp/4001/ipfs/QmPWE5D35QCRQ6yeJnNJo7b9NyxmUbNbLiD9vBfZVSaZyL
/ip4/106.54.9.33/tcp/4001/ipfs/QmXfUWEKBUETfGEPGBcJQbk8RAEnLR6UcZKB9RJoNbCAR5
/ip4/111.229.245.186/tcp/4001/ipfs/QmWg2wUgfae4GJuYXhcXZPwxBfnZQXoyG8WzTCXuZJ3b3D
/ip4/111.229.48.203/tcp/4001/ipfs/QmRgttuNpmpq7rjwpyfNzgxpVcqupeMUFQnCiczNUS1Ty9
/ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
/ip4/138.201.67.219/tcp/4001/ipfs/QmUd6zHcbkbcs7SMxwLs48qZVX3vpcM8errYS7xEczwRMA
/ip4/139.178.69.39/tcp/4001/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
/ip4/139.59.152.171/tcp/4001/ipfs/QmU6hw2Vu3CceuXtS7TxxmxE39u4htuHdg4qUvxJjbmFiX
/ip4/147.75.192.141/tcp/4001/ipfs/QmXUEWEWWq6dhKqBwryPSR8jYoa9ByeAaqnz62CRDY7ppL
/ip4/147.75.69.119/tcp/4001/ipfs/QmXYHU1M8t86gRKvUmE42smybPKXqTPEUPDUaCVtLmS6Bw
/ip4/147.75.83.83/tcp/4001/ipfs/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb
/ip4/147.75.94.235/tcp/4001/ipfs/QmQ41LAQUdH6JQCeSR1qMT8qdPAkZ9XgkvqYHs9HiAdh5Z
/ip4/148.72.170.136/tcp/4001/ipfs/QmZYBHamSKecChyasQ1oGsiS9oJEPtfQynmGR3fQGrVaeu
/ip4/164.132.162.186/tcp/4001/ipfs/QmRnrysFHnFKyZmHgPncv1Wb3x2p6HdEtLwvF7sXrPGgZh
/ip4/178.62.158.247/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
/ip4/206.189.124.214/tcp/4001/ipfs/QmRFS7Kfo6Hn16faNFt8RgEqE2khrSBH6WdhZvzLWTWiYv
/ip4/213.5.40.61/tcp/4001/ipfs/QmdBmh3PJqQiX7oGeUTYVTADF1Vhh8JfN4dttGPKdsEwQ9
/ip4/37.97.174.97/tcp/4001/ipfs/QmaW5pxpG4BAmdyjyCH1PomoonxwBYSmyF1GysDP4ZvpyV
/ip4/39.130.180.253/tcp/4001/ipfs/QmNkd4EoBzwCrjD7et3CAdpFB2i13pfk5XmyTavLiwGfQD
/ip4/40.117.173.2/tcp/4001/ipfs/QmSLbokpiUzDpuFfgJsXTRjhqHotVFz2hKCFJcwUZuw6f1
/ip4/51.15.44.84/tcp/4001/ipfs/QmWgTDkh3FyWGQvkoRHYCC9cXpVapZdJushiXL29uDhKpj
/ip4/65.49.206.253/tcp/4001/ipfs/QmNraifzLxiaEHMUS7dpE2nq2sNQZup2XJfKNy5zzWMbr5
/ip4/67.205.149.190/tcp/4001/ipfs/QmbHfp34rfwxbCPuFKkmnpe6LKuGkPDW33nyWLier2piqc
/ip4/78.46.85.216/tcp/4001/ipfs/QmSoFF1cXgZqzJnyjAJmG2h7n5s9pFaUpwqeDBktCvRXiM
/ip4/93.187.218.217/tcp/4001/ipfs/QmVNb9aEcdFgxGBLCzs9oJziSxbodt6sZMRcoXYHkyzfQx
/ip4/99.254.66.98/tcp/12878/ipfs/QmYJUt6HSZsZ5JiFEp9kuJ77HbhC3uwLDJcJUEgCitjejS
```

Create file and upload the file
$ vi glob1.txt

$ ipfs add glob1.txt
added QmUPEpTcJwY54MsMfhcNvEUURP6Z9pytWKFCMKdZ8XA5G9 glob1.txt
 14 B / 14 B [=================================


Access in public gateway
```
 curl https://ipfs.io/ipfs/QmUPEpTcJwY54MsMfhcNvEUURP6Z9pytWKFCMKdZ8XA5G9
global 1 file

```


###### Incase of not connecting

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
