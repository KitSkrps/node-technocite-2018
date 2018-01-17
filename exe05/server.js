const fs =require('fs')
// let allData = ''
// //tu prend nodejs et utilise le pour lire les informations dans file1.txt
// fs.readFile(`${process.cwd()}/data/file1.txt`, (err, data)=>{
//     allData += data
//     fs.readFile(`${process.cwd()}/data/file2.txt`, (err, data)=>{
//         allData += data
//         console.log(allData)
//     })
// })


//Promise 

const readFile = (file)=>{
    //on créer un variable promise qui va instancie l objet promise
    return new Promise((resolve, reject) =>{
        fs.readFile(file,{encoding :'uft-8'}, (err, data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
    
}
readFile(`${process.cwd()}/data/file1.txt`)
    .then(data =>{
        console.log(data)
        readFile(`${process.cwd()}/data/file2.txt`)
            .then(data =>{
                console.log(data)
            })
    }).catch(err=>{
        console.log(err)
    })

