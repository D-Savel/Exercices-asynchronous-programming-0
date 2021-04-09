const axios = require('axios')
const fsPromises = require('fs/promises')

const myWget = async () => {
  try {
    let response = await axios.get('https://fr.wikipedia.org/wiki/Solidity')
    await fsPromises.writeFile('./index.html', response.data)
    let statContent = await fsPromises.stat('./index.html')
    console.log(`${response.headers['content-length']} = ${statContent.size} bytes`);
  } catch (e) {
    console.log(e.message)
  }
}
myWget()
