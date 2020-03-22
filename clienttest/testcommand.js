const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient('/ip4/157.245.63.46/tcp/5002')

const files = [{
  path: '/tmp/myfile.txt',
  content: 'ABC'
}]

async function func1() {
 try {

 var result = await ipfs.add(files[0]) ;
  console.log("func1 result="+JSON.stringify(result))
 } catch (err) {
    console.log("func1 err="+ err);
 }

}


async function func2() {

 try {
   var result = await ipfs.cat('QmU1ogwR2yzUZNzJps72avnnmLmHaDTnCSM2Kaxb5DwMf7') ;
    console.log("func2 result="+result)
  } catch (err) {
     console.log("func2 err="+ err);
  }

}

func1();
func2();


