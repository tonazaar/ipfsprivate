### Suitability testing of jsipfs for private ipfs network

Test to check if jsipfs can be used for private ipfs network

A) Create swarm.key

Method of creating swarm.key is taken from below link

- https://medium.com/@s_van_laar/deploy-a-private-ipfs-network-on-ubuntu-in-5-steps-5aad95f7261b

```
echo -e "/key/swarm/psk/1.0.0/\n/base16/\n`tr -dc 'a-f0-9' < /dev/urandom | head -c64`" > swarm.key

```

B) Create a repo (one, two) (three)

Copy the swarm.key to repo-one, repo-two

Note, swarm.key is not copied to repo-three

C) Start the daemon with swarm.key present

- Also we had emptied bootstrap as mentioned in reference

D) Changing ports          

As the testing is being done in same machine, the ports of API, Gateway had to be changed

- For repo two, the details in [two.txt](two.txt)
- For repo one, the details in [one.txt](one.txt)
- For repo three, the details in [three.txt](three.txt)

E) Test if node one is fine

```
IPFS_PATH=/home/rameshbn/repos/one
$ jsipfs add /tmp/x1.txt

added QmfUqKTqZPHjdkwAtLKP6dM4Qac1bLRCpcwdPCfYqcGLyb x1.txt
$ jsipfs cat QmfUqKTqZPHjdkwAtLKP6dM4Qac1bLRCpcwdPCfYqcGLyb
this is x1

```

F) Connect the repo one to two 

Take the listener link from two.txt

Then connect using below command

```
IPFS_PATH=/home/rameshbn/repos/one
jsipfs swarm connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU success

```

G) Connect the repo two to two 

This is Intentional error testing

```
export IPFS_PATH=/home/rameshbn/repos/two
$ jsipfs swarm connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
A node cannot dial itself

```


H) Connect the repo three to two 

Note:- repo three is not started with swarm.key

```
IPFS_PATH=/home/rameshbn/repos/three
 
$ jsipfs swarm connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU
connect /ip4/127.0.0.1/tcp/7002/ipfs/QmP1NnQkMyYCV5jGBG2E2ziRDMxLgVK5pRXKRryAfAgeXU success

```

In repo three, swarm.key is not present. I was expected to fail.

##### Summary

- This means swarm.key method as tried is not working with jsipfs.

- So we cannot use jsipfs for IPFS private network.
