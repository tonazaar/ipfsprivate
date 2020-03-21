const ipfsClient = require('ipfs-http-client');

//const ipfs1 = ipfsClient('http://localhost:5001');

//  "API": "/ip4/157.245.63.46/tcp/5001",

const ipfs = ipfsClient('/ip4/157.245.63.46/tcp/5002')

const files = [{
  path: '/tmp/myfile.txt',
  content: 'ABC'
}]

async function func1() {
	try {

 var result = await ipfs.add(files[0]) ;
  console.log("repo1="+JSON.stringify(result))


  } catch (err) {

     console.log("err="+ err);
  }

}


async function func2() {

	try {
   var result = await ipfs.cat('QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7') ;
    console.log("repo2="+result)
  } catch (err) {

     console.log("err="+ err);
  }

}

func1();
func2();


