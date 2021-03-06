
#### Various ways of using IPFS

A) Standalone storage system with one IPFS node

B) Storage system with few IPFS node connected (private mode)

C) Storage system with few IPFS node connected (public mode)

D) Storage system connected as IPFS cluster (private mode)

E) Storage system connected as IPFS cluster (public mode)


#### Effort 

- Solving problems 4 hrs
- Preparing for writing 16 hrs 
- Writing 16 hrs


#### Various type of IPFS nodes

The IPFS nodes can be run in various methods
- Javascript IPFS, known as jsipfs
- Go IPFS, known as ipfs (this is default)
- Browser IPFS
- Desktop IPFS

#### Coverage 

- This blog explains methods for (A), (B), (C)

- It does not cover (D), (E)

###### Suitability testing 

- Evaluation of jsipfs for setup of private network
- Evaluation of goipfs for setup of private network

###### Accessing methods

- Steps for accessing IPFS files through gateway
- Steps for accessing IPFS files through API

###### Accessing mode 

- Steps for accessing IPFS files from private node 
- Steps for accessing IPFS files from public node 



##### Starting a IPFS node          

######  Downloading IPFS

The IPFS setup can be created by downloading IPFS 

Go IPFS can be obtained by following
- https://docs.ipfs.io/guides/guides/install/

JS IPFS can be got by following
- https://js.ipfs.io/


###### To start IPFS node using JS IPFS

- Set environment variable IPFS_PATH to a directory of IPFS repository
- Run the command jsipfs init
- Run the command jsipfs daemon

```

export IPFS_PATH=~/repos/one

$ jsipfs init
initializing ipfs node at /home/rameshbn/repos/one
generating 2048-bit RSA keypair...done
peer identity: QmVwvS2mjw3pvVgFqfYL5pwtnQhf68kWKVGRSWSMaUkSGS
to get started, enter:

        jsipfs cat /ipfs/QmfGBRT6BbWJd7yUc2uYdaUZJBbnEFvTqehPFoSMQ6wgdr/readme


$ jsipfs daemon 


```
###### To start IPFS node using GO IPFS

- Set environment variable IPFS_PATH to a directory of IPFS repository
- Run the command ipfs init
- Run the command ipfs daemon

```
export IPFS_PATH=~/ipfsrepos/one


ipfs init
initializing IPFS node at /home/alarm/ipfsrepos/one
generating 2048-bit RSA keypair...done
peer identity: QmQpynLMNnjFWjGRVFenDQJzaWbERYiFvNi8QnBLqNUfo4
to get started, enter:

        ipfs cat /ipfs/QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv/readme

ipfs daemon 
Initializing daemon...
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

The above two steps show how to setup a default IPFS nodes

- The points to note are, the location of config file 

The contents of IPFS_PATH directory looks like below

```
ls -l ~/repos/one
total 44
-rw-rw-r--  1 rameshbn rameshbn   21 Mar 21 15:08 api
drwxrwxr-x 54 rameshbn rameshbn 4096 Mar 21 15:08 blocks
-rw-rw----  1 rameshbn rameshbn 6028 Mar 21 14:57 config
drwxr-xr-x  2 rameshbn rameshbn 4096 Mar 21 15:08 datastore
-rw-rw-r--  1 rameshbn rameshbn  190 Mar 20 16:52 datastore_spec
drwxrwxr-x  2 rameshbn rameshbn 4096 Mar 20 16:52 keys
drwx------  2 rameshbn rameshbn 4096 Mar 21 03:44 keystore
drwxrwxr-x  2 rameshbn rameshbn 4096 Mar 20 17:00 local
-rw-rw-r--  1 rameshbn rameshbn    0 Mar 21 15:08 repo.lock
-rw-rw-r--  1 rameshbn rameshbn    1 Mar 20 16:52 version

```

###### Useful IPFS references

Aspects of config is explained in
- https://docs.ipfs.io/guides/examples/config/

To play with IPFS commands
- https://docs.ipfs.io/reference/api/cli/

To try IPFS files as normal files 
- https://docs.ipfs.io/reference/api/cli/#ipfs-files

Detailed examples using jsipfs
- https://github.com/ipfs/js-ipfs/tree/master/examples

Useful course on IPFS
- https://github.com/ipfs/camp/tree/master/CORE_AND_ELECTIVE_COURSES/CORE_COURSE_C

##### Building IPFS private network

For comparison in normal IPFS setup, the IPFS node is connected to its peer public nodes. In private network, you generate a key (called swarm.key), which will be placed in IPFS_PATH directory. Only those nodes with that swarm.key can only connect to each other.

###### Normal IPFS setup

In normal IPFS setup, the IPFS node are connected to public peer nodes.  The peer nodes can be listed using command "ipfs swarm peers"

Example           

```
ipfs swarm peers
/ip4/104.236.179.241/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
/ip4/104.236.76.40/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
/ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu

```

Those peers you see above are public peers

For more details check this
- https://docs.ipfs.io/guides/examples/bootstrap/


###### Private IPFS setup

In private network, you generate a key (called swarm.key), which will be placed in IPFS_PATH directory. Only those nodes with that swarm.key can only connect to each other.

A swarm key is created using one of the two methods
 
Method-1

```
git clone https://github.com/Kubuxu/go-ipfs-swarm-key-gen
cd go-ipfs-swarm-key-gen/
go run ipfs-swarm-key-gen/main.go > $IPFS_PATH/swarm.key

```

Method-2

```
echo -e "/key/swarm/psk/1.0.0/\n/base16/\n`tr -dc 'a-f0-9' < /dev/urandom | head -c64`" > swarm.key

```

Method-2 is obtained from link

- https://medium.com/@s_van_laar/deploy-a-private-ipfs-network-on-ubuntu-in-5-steps-5aad95f7261b

When swarm.key is present in $IPFS_PATH directory, only those peers what that same key can connect.

Copy swarm.key to $IPFS_PATH directory        

```
 cp swarm.key $IPFS_PATH
```

Remove the entries of Boostrap in config file 

```
"Bootstrap": [

  ]
```

##### Suitability testing
- [Jsipfs testing ](testingdata/jsipfsstep.md)
- [Goipfs testing ](testingdata/goipfsvalidate.md)

##### Accessing methods
- [Remote access of IPFS files in program ](testingdata/apiaccess.md)
- [Accessing ipfs files in private gateway](testingdata/privategateway.md)
- [Accessing ipfs files in public gateway](publicaccess/publicaccess.md)

##### Private network testing
- [Goipfs installation and setup ](testingdata/goipfsstep.md)
- [Private network setup for validation ](testingdata/goipfsvalidate.md)
- [File access testing between nodes](testingdata/goipfsfiletesting.md)
- [Remote file access testing](testingdata/remoteipfs.md)

##### References

- https://github.com/ahester57/ipfs-private-swarm
- https://mrh.io/ipfs-private-networks/
- https://medium.com/@s_van_laar/deploy-a-private-ipfs-network-on-ubuntu-in-5-steps-5aad95f7261b
- https://medium.com/@rossbulat/introduction-to-ipfs-set-up-nodes-on-your-network-with-http-gateways-10e21ea689a4
- https://medium.com/@ConsenSys/an-introduction-to-ipfs-9bba4860abd0
- https://brilliant.org/wiki/merkle-tree/
- https://www.slideshare.net/chenghanTsai1/ipfs-85264010
- https://labs.eleks.com/2019/03/ipfs-network-data-replication.html
~                                                               

