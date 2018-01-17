const promisify = require ('es6-promisify')
const fs= ('fs')

const read= promisify(fs.readFile)
read(`${process.cwd()}/data/file1.txt`)
    .then(data =>{
        console.log(data)
    })